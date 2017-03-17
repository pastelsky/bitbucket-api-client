import Endpoints from '../../endpoints'

export default class PullRequests {
  constructor(client) {
    this.client = client
  }

  get(accountName: string, repoSlug: string, pullRequestId: number) {
    return this.client.get(
      Endpoints.v2.repos.pullRequests.byId(accountName, repoSlug, pullRequestId),
    )
  }

  getAll(accountName: string, repoSlug: string, options: ?{
      state: "MERGED" | "SUPERSEDED" | "OPEN" | "DECLINED"
    }) {
    return this.client.get(
      Endpoints.v2.repos.pullRequests.all(accountName, repoSlug),
      { data: options },
    )
  }

  getComment(
    accountName: string,
    repoSlug: string,
    pullRequestId: number,
    commentId: number,
  ) {
    return this.client.get(
      Endpoints.v2.repos.pullRequests.comments.byId(accountName, repoSlug, pullRequestId, commentId),
    )
  }

  getAllComments(accountName: string, repoSlug: string, pullRequestId: number) {
    return this.client.get(
      Endpoints.v2.repos.pullRequests.comments.all(accountName, repoSlug, pullRequestId),
    )
  }

  postComment(
    accountName: string,
    repoSlug: string,
    pullRequestId: number,
    content: string,
  ) {
    return this.client.post(
      Endpoints.v1.repos.pullRequests.comments.all(accountName, repoSlug, pullRequestId),
      { data: { content } },
    )
  }

  updateComment(
    accountName: string,
    repoSlug: string,
    pullRequestId: number,
    commentId: number,
    content: string,
  ) {
    return this.client.put(
      Endpoints.v1.repos.pullRequests.comments.byId(accountName, repoSlug, pullRequestId, commentId),
      { data: { content } },
    )
  }

  deleteComment(
    accountName: string,
    repoSlug: string,
    pullRequestId: number,
    commentId: number,
  ) {
    return this.client.delete(
      Endpoints.v1.repos.pullRequests.comments.byId(accountName, repoSlug, pullRequestId, commentId),
    )
  }

  toggleCommentSpamFlag(
    accountName: string,
    repoSlug: string,
    pullRequestId: number,
    commentId: number,
  ) {
    return this.client.put(
      Endpoints.v1.repos.pullRequests.comments.spamFlag(accountName, repoSlug, pullRequestId, commentId),
    )
  }
}
