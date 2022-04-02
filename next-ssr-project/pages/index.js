import styles from '../styles/Home.module.css'

export const Home = (props) => {

  return (
    <div className={styles.container}>
      {
        props.myProp ? (
          <h1>
            Looks like we have our SSR application.
          </h1>
        )
          :
          (
            <h1>
              Oops, SSR props were not passed!
            </h1>
          )
      }
    </div>
  )
}

export async function getServerSideProps() {
  return { props: { myProp: false } }
}

export default Home 

```
npx create-next-app@latest --typescript
# or
yarn create next-app --typescript
```

