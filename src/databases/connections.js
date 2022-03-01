import sql from "mssql";

const bdSettings = {
  user: "sa",
  password: "Guaylinux27.",
  server: "localhost",
  database: "TestDB",
  options: {
    enableArithAbort: true,
    encrypt: true, // for azure
    trustServerCertificate: true, // change to true for local dev / self-signed certs
  },
};

export async function getConnection() {
  try {
    const pool = await sql.connect(bdSettings);
    return pool;
  } catch (error) {
    console.log(error);
  }
}
