import Endpoints from '../../endpoints'

import PullRequests from './pullrequests'

export default class Repos {
  constructor(client) {
    this.client = client
    this.pullRequests = new PullRequests(client)
  }

  fork(accountName: string, repoSlug: string) {
    return this.client.post(
      Endpoints.v1.repos.fork(accountName, repoSlug),
    )
  }

  getMainBranch(accountName: string, repoSlug: string) {
    return this.client.get(
      Endpoints.v1.repos.branch.mainBranch(accountName, repoSlug)
    )
  }

  getRawSource(accountName: string, repoSlug: string) {

  }
}
