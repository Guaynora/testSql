import { getConnection } from "../databases/connections";

export const getProduct = async () => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query("SELECT * FROM Inventory");
    /* console.log(result);
    res.json(result.recordset); */
    return result;
  } catch (error) {
    console.log(error);
  }
};
