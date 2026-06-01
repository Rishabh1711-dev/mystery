import mongoose from 'mongoose';

type ConnectionObject = {
  isConnected?: number;
};

const connection: ConnectionObject = {};

async function dbConnect(): Promise<void> {
  // Check if we have a connection to the database or if it's currently connecting
  if (connection.isConnected) {
    console.log('Already connected to the database');
    return;
  }

  // ADD THIS CHECK: Throw an error immediately if the variable is missing
  if (!process.env.MONGODB_URI) {
    throw new Error('Please define the MONGODB_URI environment variable');
  }

  try {
    // Attempt to connect to the database (no longer needs the || '' fallback)
    const db = await mongoose.connect(process.env.MONGODB_URI, {});

    connection.isConnected = db.connections[0].readyState;

    console.log('Database connected successfully');
  } catch (error) {
    console.error('Database connection failed:', error);

    // Graceful exit in case of a connection error
    process.exit(1);
  }
}

export default dbConnect;