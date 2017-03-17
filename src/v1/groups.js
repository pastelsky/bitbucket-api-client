// @flow

import Endpoints from '../endpoints'

export default class Groups <Client> {
  client: Client

  constructor(client) {
    this.client = client
  }

  findAll(filters: Array<{ ownerName: string, groupSlug: string }>) {
    const options = filters
      .map(({ ownerName, groupSlug}) => `group=${ownerName}/${groupSlug}`)
      .join('&')
    this.client.get(Endpoints.v1.groups.all + '?' + options)
  }

  getForAccount(accountName: string) {
    this.client.get(
      Endpoints.v1.groups.byAccount(accountName),
    )
  }

  create(accountName: string, groupName: string) {
    this.client.post(
      Endpoints.v1.groups.byAccount(accountName),
      { data: { name: groupName } },
    )
  }

  update(accountName: string, groupSlug: string, options: {
      name: string,
      auto_add: boolean,
      permission: "read" | "write" | "admin",
    }) {
    this.client.put(
      Endpoints.v1.groups.byGroup(accountName, groupSlug),
      { data: { group_slug: groupSlug, ...options } },
    )
  }

  delete(accountName: string, groupSlug: string) {
    this.client.delete(
      Endpoints.v1.groups.byGroup(accountName, groupSlug),
    )
  }

  getMembers(accountName: string, groupSlug: string) {
    this.client.get(
      Endpoints.v1.groups.members(accountName, groupSlug),
    )
  }

  addMember(accountName: string, groupSlug: string, memberName: string) {
    this.client.put(
      Endpoints.v1.groups.member(accountName, groupSlug, memberName),
    )
  }

  deleteMember(accountName: string, groupSlug: string, memberName: string) {
    this.client.delete(
      Endpoints.v1.groups.member(accountName, groupSlug, memberName),
    )
  }
}
