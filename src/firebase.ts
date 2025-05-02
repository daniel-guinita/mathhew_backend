/* eslint-disable prettier/prettier */
import * as admin from 'firebase-admin';

const base64 = process.env.FIREBASE_SERVICE_ACCOUNT_BASE64;

if (!base64) {
  console.error('❌ FIREBASE_SERVICE_ACCOUNT_BASE64 is not set.');
  throw new Error('FIREBASE_SERVICE_ACCOUNT_BASE64 environment variable is not set.');
}

try {
  const decoded = Buffer.from(base64, 'base64').toString('utf-8');
  const serviceAccount = JSON.parse(decoded);

  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });

  console.log('✅ Firebase initialized successfully.');
} catch (error) {
  console.error('❌ Error initializing Firebase:', error);
  throw error;
}

const db = admin.firestore();
export { admin, db };
