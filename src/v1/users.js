import Endpoints from '../endpoints'

export default class Users {
  constructor(client) {
  this.client = client
  }

  getProfile(accountNameOrEmail: string) {
    return this.client.get(
      Endpoints.v1.users.byId(accountNameOrEmail)
    )
  }

  getFollowers(accountNameOrEmail: string) {
    return this.client.get(
      Endpoints.v1.users.followers(accountNameOrEmail)
    )
  }

  getPlan(accountNameOrEmail: string) {
    return this.client.get(
      Endpoints.v1.users.plan(accountNameOrEmail)
    )
  }

  getEvents(accountNameOrEmail: string) {
    return this.client.get(
      Endpoints.v1.users.events(accountNameOrEmail)
    )
  }
}
