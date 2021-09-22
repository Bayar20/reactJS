export default function UseAirtable(data) {
  const { name, email, jobRole, description } = data;
  var Airtable = require("airtable");
  var base = new Airtable({
    apiKey: `${process.env.REACT_APP_AIR_TABLE_APY_KEY}`
  }).base("appVHH62brm3i3BIu");
  base("Table 1").create(
    [
      {
        fields: {
          Name: name,
          Email: email,
          Jobrole: jobRole,
          Description: description
        }
      }
    ],
    function (err) {
      if (err) {
        console.error(err);
        return;
      }
    }
  );
}
