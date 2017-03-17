// @flow
import Endpoints from '../endpoints'

export default  class Invitations{
  constructor(client) {
    this.client = client
  }

  send(accountName: string, repoSlug: string, email: string, permission: "read" | "write" | "admin") {
    this.client.post(
      Endpoints.v1.invitations(accountName, repoSlug, email),
      { data: { perm: permission } }
    )
  }
}
