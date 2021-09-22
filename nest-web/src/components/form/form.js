import React, { createContext, useState } from "react"
import { omit, setWith } from "lodash"

export const ValidatedFormContext = createContext({
  onSubmit: async () => ({}),
  error: {},
  value: {},
  validators: {},
  onChange: (_role, _value) => {},
})

export const ValidatedForm = props => {
  const { children, validators } = props
  const [error, setError] = useState({})
  const [value, setValue] = useState({})
  const onChange = (role, next) => {
    setError(omit(error, [role]))
    setValue(value => {
      return setWith({ ...value }, `${role}`, next)
    })
  }

  const onSubmit = async () => {
    const errors = await getErrors()
    setError(errors)
    return errors
  }

  const getErrors = async () => {
    const error= {}
    for (const role in validators) {
      try {
        for (const validator of validators[role] || []) {
          await validator(value[role])
        }
      } catch (validationError) {
        error[role] = validationError.message
      }
    }
    return error
  }

  return (
    <ValidatedFormContext.Provider
      value={{ onSubmit, value, error, validators, onChange }}
    >
      {children}
    </ValidatedFormContext.Provider>
  )
}
