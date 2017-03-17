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
    return this.client.get(Endpoints.v1.groups.all + '?' + options)
  }

  getForAccount(accountName: string) {
    return this.client.get(
      Endpoints.v1.groups.byAccount(accountName),
    )
  }

  create(accountName: string, groupName: string) {
    return this.client.post(
      Endpoints.v1.groups.byAccount(accountName),
      { data: { name: groupName } },
    )
  }

  update(accountName: string, groupSlug: string, options: {
      name: string,
      auto_add: boolean,
      permission: "read" | "write" | "admin",
    }) {
    return this.client.put(
      Endpoints.v1.groups.byGroup(accountName, groupSlug),
      { data: { group_slug: groupSlug, ...options } },
    )
  }

  delete(accountName: string, groupSlug: string) {
    return this.client.delete(
      Endpoints.v1.groups.byGroup(accountName, groupSlug),
    )
  }

  getMembers(accountName: string, groupSlug: string) {
    return this.client.get(
      Endpoints.v1.groups.members(accountName, groupSlug),
    )
  }

  addMember(accountName: string, groupSlug: string, memberName: string) {
    return this.client.put(
      Endpoints.v1.groups.member(accountName, groupSlug, memberName),
    )
  }

  deleteMember(accountName: string, groupSlug: string, memberName: string) {
    return this.client.delete(
      Endpoints.v1.groups.member(accountName, groupSlug, memberName),
    )
  }
}
