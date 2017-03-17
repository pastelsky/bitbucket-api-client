// @flow
import Endpoints from '../endpoints'

export default class Privileges <Client> {
  client: Client

  constructor(client) {
    this.client = client
  }

  optionsType: {
    filter: "read" | "write" | "admin",
    'private': boolean
  }

  getForAccount(accountName: string, options: ?{ filter:  "read" | "write" | "admin", 'private': boolean }) {
    this.client.get(
      Endpoints.v1.privileges.byAccount(accountName),
      { data: options },
    )
  }

  getForRepo(accountName: string, repoSlug: string, options: ? { filter:  "read" | "write" | "admin" }) {
    this.client.get(
      Endpoints.v1.privileges.byRepo(accountName, repoSlug),
      { data: options },
    )
  }

  getForIndividual(accountName: string, repoSlug: string, privilegeAccount: string) {
    this.client.get(
      Endpoints.v1.privileges.byIndividual(accountName, repoSlug),
    )
  }

  grantToIndividual(accountName: string, repoSlug: string, privilegeAccount: string, privilege: "read" | "write" | "admin") {
    this.client.put(
      Endpoints.v1.privileges.byIndividual(accountName, repoSlug),
      { data: { privilege } }
    )
  }

  revokeFromIndividual(accountName: string, repoSlug: string, privilegeAccount: string) {
    this.client.delete(
      Endpoints.v1.privileges.byIndividual(accountName, repoSlug),
    )
  }

  revokeAllFromRepo(accountName: string, repoSlug: string) {
    this.client.delete(
      Endpoints.v1.privileges.byRepo(accountName, repoSlug),
    )
  }

  revokeAllFromAccount(accountName: string) {
    this.client.delete(
      Endpoints.v1.privileges.byAccount(accountName),
    )
  }
}
