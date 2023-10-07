import { setFailed } from '@actions/core';
import { getOctokit } from '@actions/github';

export const owner = 'kittrgg';
export const repo = 'kittr';

export function getOctokitClient(): ReturnType<typeof getOctokit> {
	const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
	if (!GITHUB_TOKEN) {
		const errorMessage = 'GITHUB_TOKEN is not defined';
		setFailed(errorMessage);
		throw new Error(errorMessage);
	}

	return getOctokit(GITHUB_TOKEN);
}
