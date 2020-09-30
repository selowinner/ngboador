import { coreEncode } from 'crypto-core';

export async function generateRef(email: string): Promise<string> {
	const crypt = await coreEncode(email.trim(), Number(process.env.CRYPTO_DIGEST));
  return new Promise(next => next(crypt));
}

export async function generateRecovery(): Promise<number> {
  const initialState = [0, 0, 0, 0];
  const recovery = initialState.map(value => value + Math.floor(Math.random() * 9)).join('');
  return new Promise(next => next(parseInt(recovery, 10)));
}