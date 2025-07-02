import { Injectable } from '@nestjs/common';

@Injectable()
export class BatchService {
	getHello(): string {
		return 'welcome to Nestar Batch Service!';
	}

	public async batchRollback(): Promise<void> {
		console.log('batchRollback');
	}

	public async batchProperties(): Promise<void> {
		console.log('batchProperties');
	}

	public async batchAgents(): Promise<void> {
		console.log('batchAgents');
	}
}
