// @flow
export default {
  v1: {
    privileges: {
      byAccount: (accountName: string) =>
        `/1.0/privileges/${accountName}}`,

      byRepo: (accountName: string, repoSlug: string) =>
        `/1.0/privileges/${accountName}/${repoSlug}`,

      byIndividual: (
        accountName: string,
        repoSlug: string,
        privilegeAccount: string,
      ) =>
        `/1.0/privileges/${accountName}/${repoSlug}/${privilegeAccount}`,

    },
    groups: {
      all: '/1.0/groups',

      members: (accountName: string, repoSlug: string) =>
        `/1.0/groups/${accountName}}/${repoSlug}/members`,

      member: (accountName: string, repoSlug: string, memberName: string) =>
        `/1.0/groups/${accountName}}/${repoSlug}/members/${memberName}`,

      byAccount: (accountName: string) =>
        `/1.0/groups/${accountName}}`,

      byGroup: (accountName: string, repoSlug: string) =>
        `/1.0/groups/${accountName}}/${repoSlug}`,
    },
    invitations: (accountName: string, repoSlug: string, email: string) =>
      `/1.0/invitations/${accountName}/${repoSlug}/${email}`,

    users: {
      byId: (id: string) => `/1.0/users/${id}`,
      followers: (id: string) => `/1.0/users/${id}/followers`,
      plan: (id: string) => `/1.0/users/${id}/plan`,
      events: (id: string) => `/1.0/users/${id}/events`,
    },

    repos: {
      rawSource: (accountName: string, repoSlug: string, revision: string, path: string) =>
      `1.0/repositories/${accountName}/${repoSlug}/raw/${revision}/${path}`,

      pullRequests: {
        comments: {
          all: (accountName: string, repoSlug: string, pullRequestId: number) =>
            `/1.0/repositories/${accountName}/${repoSlug}/pullrequests/${pullRequestId}/comments`,
          byId: (
            accountName: string,
            repoSlug: string,
            pullRequestId: number,
            commentId: number,
          ) =>
            `/1.0/repositories/${accountName}/${repoSlug}/pullrequests/${pullRequestId}/comments/${commentId}`,
          spamFlag: (
            accountName: string,
            repoSlug: string,
            pullRequestId: number,
            commentId: number,
          ) =>
            `/1.0/repositories/${accountName}/${repoSlug}/pullrequests/${pullRequestId}/comments/spam/${commentId}`,
        },
      },
      fork: (accountName: string, repoSlug: string) =>
        `/1.0/repositories/${accountName}/${repoSlug}/fork`,
      branch: {
        mainBranch: (accountName: string, repoSlug: string) =>
        `1.0/repositories/${accountName}/${repoSlug}/main-branch`
      },
    },
  },

  v2: {
    repos: {
      pullRequests: {
        all: (accountName: string, repoSlug: string) =>
          `/2.0/repositories/${accountName}/${repoSlug}/pullrequests`,
        byId:  (accountName: string, repoSlug: string, pullRequestId: number) =>
          `/2.0/repositories/${accountName}/${repoSlug}/pullrequests/${pullRequestId}`,
        comments: {
          all: (accountName: string, repoSlug: string, pullRequestId: number) =>
          `/2.0/repositories/${accountName}/${repoSlug}/pullrequests/${pullRequestId}/comments`,
          byId: (accountName: string, repoSlug: string, pullRequestId: number, commentId) =>
            `/2.0/repositories/${accountName}/${repoSlug}/pullrequests/${pullRequestId}/comments/${commentId}`
        }
      }
    }
  }
}
