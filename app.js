const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3000;
var CronJob = require("cron").CronJob;
const { Data } = require("./models");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

var job = new CronJob(
  "*/10 * * * * *",
  async function () {
    const randomInput = Math.floor(Math.random() * 200);
    try {
      const newData = await Data.create({
        debit: `${Math.floor(Math.random() * 200)} m3/s`,
        tss: `${Math.floor(Math.random() * 200)} mg/L`,
        pH: `${Math.floor(Math.random() * 14)} `,
        no3n: `${Math.floor(Math.random() * 200)} mg/L`,
        po4: `${Math.floor(Math.random() * 200)} mg/L`,
        nh3n: `${Math.floor(Math.random() * 200)} mg/L`,
        tds: `${Math.floor(Math.random() * 200)} mg/L`,
        bod5: `${Math.floor(Math.random() * 200)} mg/L`,
        cod: `${Math.floor(Math.random() * 200)} mg/L`,
        fe: `${Math.floor(Math.random() * 200)} mg/L`,
        cu: `${Math.floor(Math.random() * 200)} mg/L`,
        cr: `${Math.floor(Math.random() * 200)} mg/L`,
      });
    } catch (error) {
      console.log(error);
    }
  },
  null,
  true,
  "America/Los_Angeles"
);

app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});

app.get("/data", async (req, res) => {
  try {
    const data = await Data.findAll();
    console.log(data);
    res.status(200).json({ data });
  } catch (error) {
    res.status(500).json({ error });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
