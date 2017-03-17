// @flow
import axios from 'axios'
import Privileges from './v1/privileges'
import Groups from './v1/groups'
import Invitations from './v1/invitations'
import Repos from './v1/repos/index'
import Users from './v1/users'

export default class BitBucketClient {
  privileges: Privileges
  groups: Groups
  invitations: Invitations
  repos: Repos
  users: Users

  constructor(username: string, password: string) {
    const client = axios.create({
      baseURL: 'https://api.bitbucket.org/',
      headers: {
        'Authorization': 'Basic ' + new Buffer(`${username}:${password}`).toString('base64'),
      },
    })

    this.privileges = new Privileges(client)
    this.groups = new Groups(client)
    this.invitations = new Invitations(client)
    this.repos = new Repos(client)
    this.users = new Users(client)

  }


}
