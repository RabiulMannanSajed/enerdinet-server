import {
  createTreadEnergyIntoDB,
  deleteTreadEnergyFromDb,
  getAllTreadEnergyFromDb,
  getTreadEnergyByIdFromDb,
  updateTreadEnergyIntoDB,
} from "./createTrade.service.js";

// ✅ Create trade
export const createTreadEnergy = async (req, res) => {
  try {
    const data = req.body;
    const newTrade = await createTreadEnergyIntoDB(data);
    res.status(201).json(newTrade);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ Get all trades
export const getAllTreadEnergy = async (req, res) => {
  try {
    const trades = await getAllTreadEnergyFromDb();
    res.status(200).json(trades);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ Get trade by ID
export const getTreadEnergyById = async (req, res) => {
  try {
    const { id } = req.params;
    const trade = await getTreadEnergyByIdFromDb(id);
    if (!trade) {
      return res.status(404).json({ message: "Trade not found" });
    }
    res.status(200).json(trade);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ Update trade
export const updateTreadEnergy = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedTrade = await updateTreadEnergyIntoDB(id, req.body);
    res.status(200).json(updatedTrade);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ Delete trade
export const deleteTreadEnergy = async (req, res) => {
  try {
    const { id } = req.params;
    await deleteTreadEnergyFromDb(id);
    res.status(200).json({ message: "Trade deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
