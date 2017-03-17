'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var axios = _interopDefault(require('axios'));

var Endpoints = {
  v1: {
    privileges: {
      byAccount: function byAccount(accountName) {
        return '/1.0/privileges/' + accountName + '}';
      },

      byRepo: function byRepo(accountName, repoSlug) {
        return '/1.0/privileges/' + accountName + '/' + repoSlug;
      },

      byIndividual: function byIndividual(accountName, repoSlug, privilegeAccount) {
        return '/1.0/privileges/' + accountName + '/' + repoSlug + '/' + privilegeAccount;
      }

    },
    groups: {
      all: '/1.0/groups',

      members: function members(accountName, repoSlug) {
        return '/1.0/groups/' + accountName + '}/' + repoSlug + '/members';
      },

      member: function member(accountName, repoSlug, memberName) {
        return '/1.0/groups/' + accountName + '}/' + repoSlug + '/members/' + memberName;
      },

      byAccount: function byAccount(accountName) {
        return '/1.0/groups/' + accountName + '}';
      },

      byGroup: function byGroup(accountName, repoSlug) {
        return '/1.0/groups/' + accountName + '}/' + repoSlug;
      }
    },
    invitations: function invitations(accountName, repoSlug, email) {
      return '/1.0/invitations/' + accountName + '/' + repoSlug + '/' + email;
    },

    users: {
      byId: function byId(id) {
        return '/1.0/users/' + id;
      },
      followers: function followers(id) {
        return '/1.0/users/' + id + '/followers';
      },
      plan: function plan(id) {
        return '/1.0/users/' + id + '/plan';
      },
      events: function events(id) {
        return '/1.0/users/' + id + '/events';
      }
    },

    repos: {
      rawSource: function rawSource(accountName, repoSlug, revision, path) {
        return '1.0/repositories/' + accountName + '/' + repoSlug + '/raw/' + revision + '/' + path;
      },

      pullRequests: {
        comments: {
          all: function all(accountName, repoSlug, pullRequestId) {
            return '/1.0/repositories/' + accountName + '/' + repoSlug + '/pullrequests/' + pullRequestId + '/comments';
          },
          byId: function byId(accountName, repoSlug, pullRequestId, commentId) {
            return '/1.0/repositories/' + accountName + '/' + repoSlug + '/pullrequests/' + pullRequestId + '/comments/' + commentId;
          },
          spamFlag: function spamFlag(accountName, repoSlug, pullRequestId, commentId) {
            return '/1.0/repositories/' + accountName + '/' + repoSlug + '/pullrequests/' + pullRequestId + '/comments/spam/' + commentId;
          }
        }
      },
      fork: function fork(accountName, repoSlug) {
        return '/1.0/repositories/' + accountName + '/' + repoSlug + '/fork';
      },
      branch: {
        mainBranch: function mainBranch(accountName, repoSlug) {
          return '1.0/repositories/' + accountName + '/' + repoSlug + '/main-branch';
        }
      }
    }
  },

  v2: {
    repos: {
      pullRequests: {
        all: function all(accountName, repoSlug) {
          return '/2.0/repositories/' + accountName + '/' + repoSlug + '/pullrequests';
        },
        byId: function byId(accountName, repoSlug, pullRequestId) {
          return '/2.0/repositories/' + accountName + '/' + repoSlug + '/pullrequests/' + pullRequestId;
        },
        comments: {
          all: function all(accountName, repoSlug, pullRequestId) {
            return '/2.0/repositories/' + accountName + '/' + repoSlug + '/pullrequests/' + pullRequestId + '/comments';
          },
          byId: function byId(accountName, repoSlug, pullRequestId, commentId) {
            return '/2.0/repositories/' + accountName + '/' + repoSlug + '/pullrequests/' + pullRequestId + '/comments/' + commentId;
          }
        }
      }
    }
  }
};

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();







var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var Privileges = function () {
  function Privileges(client) {
    classCallCheck(this, Privileges);

    this.client = client;
  }

  createClass(Privileges, [{
    key: "getForAccount",
    value: function getForAccount(accountName, options) {
      return this.client.get(Endpoints.v1.privileges.byAccount(accountName), { data: options });
    }
  }, {
    key: "getForRepo",
    value: function getForRepo(accountName, repoSlug, options) {
      return this.client.get(Endpoints.v1.privileges.byRepo(accountName, repoSlug), { data: options });
    }
  }, {
    key: "getForIndividual",
    value: function getForIndividual(accountName, repoSlug, privilegeAccount) {
      return this.client.get(Endpoints.v1.privileges.byIndividual(accountName, repoSlug));
    }
  }, {
    key: "grantToIndividual",
    value: function grantToIndividual(accountName, repoSlug, privilegeAccount, privilege) {
      return this.client.put(Endpoints.v1.privileges.byIndividual(accountName, repoSlug), { data: { privilege: privilege } });
    }
  }, {
    key: "revokeFromIndividual",
    value: function revokeFromIndividual(accountName, repoSlug, privilegeAccount) {
      return this.client.delete(Endpoints.v1.privileges.byIndividual(accountName, repoSlug));
    }
  }, {
    key: "revokeAllFromRepo",
    value: function revokeAllFromRepo(accountName, repoSlug) {
      return this.client.delete(Endpoints.v1.privileges.byRepo(accountName, repoSlug));
    }
  }, {
    key: "revokeAllFromAccount",
    value: function revokeAllFromAccount(accountName) {
      return this.client.delete(Endpoints.v1.privileges.byAccount(accountName));
    }
  }]);
  return Privileges;
}();

var Groups = function () {
  function Groups(client) {
    classCallCheck(this, Groups);

    this.client = client;
  }

  createClass(Groups, [{
    key: 'findAll',
    value: function findAll(filters) {
      var options = filters.map(function (_ref) {
        var ownerName = _ref.ownerName,
            groupSlug = _ref.groupSlug;
        return 'group=' + ownerName + '/' + groupSlug;
      }).join('&');
      return this.client.get(Endpoints.v1.groups.all + '?' + options);
    }
  }, {
    key: 'getForAccount',
    value: function getForAccount(accountName) {
      return this.client.get(Endpoints.v1.groups.byAccount(accountName));
    }
  }, {
    key: 'create',
    value: function create(accountName, groupName) {
      return this.client.post(Endpoints.v1.groups.byAccount(accountName), { data: { name: groupName } });
    }
  }, {
    key: 'update',
    value: function update(accountName, groupSlug, options) {
      return this.client.put(Endpoints.v1.groups.byGroup(accountName, groupSlug), { data: _extends({ group_slug: groupSlug }, options) });
    }
  }, {
    key: 'delete',
    value: function _delete(accountName, groupSlug) {
      return this.client.delete(Endpoints.v1.groups.byGroup(accountName, groupSlug));
    }
  }, {
    key: 'getMembers',
    value: function getMembers(accountName, groupSlug) {
      return this.client.get(Endpoints.v1.groups.members(accountName, groupSlug));
    }
  }, {
    key: 'addMember',
    value: function addMember(accountName, groupSlug, memberName) {
      return this.client.put(Endpoints.v1.groups.member(accountName, groupSlug, memberName));
    }
  }, {
    key: 'deleteMember',
    value: function deleteMember(accountName, groupSlug, memberName) {
      return this.client.delete(Endpoints.v1.groups.member(accountName, groupSlug, memberName));
    }
  }]);
  return Groups;
}();

var Invitations = function () {
  function Invitations(client) {
    classCallCheck(this, Invitations);

    this.client = client;
  }

  createClass(Invitations, [{
    key: "send",
    value: function send(accountName, repoSlug, email, permission) {
      return this.client.post(Endpoints.v1.invitations(accountName, repoSlug, email), { data: { perm: permission } });
    }
  }]);
  return Invitations;
}();

var PullRequests = function () {
  function PullRequests(client) {
    classCallCheck(this, PullRequests);

    this.client = client;
  }

  createClass(PullRequests, [{
    key: "get",
    value: function get$$1(accountName, repoSlug, pullRequestId) {
      return this.client.get(Endpoints.v2.repos.pullRequests.byId(accountName, repoSlug, pullRequestId));
    }
  }, {
    key: "getAll",
    value: function getAll(accountName, repoSlug, options) {
      return this.client.get(Endpoints.v2.repos.pullRequests.all(accountName, repoSlug), { data: options });
    }
  }, {
    key: "getComment",
    value: function getComment(accountName, repoSlug, pullRequestId, commentId) {
      return this.client.get(Endpoints.v2.repos.pullRequests.comments.byId(accountName, repoSlug, pullRequestId, commentId));
    }
  }, {
    key: "getAllComments",
    value: function getAllComments(accountName, repoSlug, pullRequestId) {
      return this.client.get(Endpoints.v2.repos.pullRequests.comments.all(accountName, repoSlug, pullRequestId));
    }
  }, {
    key: "postComment",
    value: function postComment(accountName, repoSlug, pullRequestId, content) {
      return this.client.post(Endpoints.v1.repos.pullRequests.comments.all(accountName, repoSlug, pullRequestId), { data: { content: content } });
    }
  }, {
    key: "updateComment",
    value: function updateComment(accountName, repoSlug, pullRequestId, commentId, content) {
      return this.client.put(Endpoints.v1.repos.pullRequests.comments.byId(accountName, repoSlug, pullRequestId, commentId), { data: { content: content } });
    }
  }, {
    key: "deleteComment",
    value: function deleteComment(accountName, repoSlug, pullRequestId, commentId) {
      return this.client.delete(Endpoints.v1.repos.pullRequests.comments.byId(accountName, repoSlug, pullRequestId, commentId));
    }
  }, {
    key: "toggleCommentSpamFlag",
    value: function toggleCommentSpamFlag(accountName, repoSlug, pullRequestId, commentId) {
      return this.client.put(Endpoints.v1.repos.pullRequests.comments.spamFlag(accountName, repoSlug, pullRequestId, commentId));
    }
  }]);
  return PullRequests;
}();

var Repos = function () {
  function Repos(client) {
    classCallCheck(this, Repos);

    this.client = client;
    this.pullRequests = new PullRequests(client);
  }

  createClass(Repos, [{
    key: 'fork',
    value: function fork(accountName, repoSlug) {
      return this.client.post(Endpoints.v1.repos.fork(accountName, repoSlug));
    }
  }, {
    key: 'getMainBranch',
    value: function getMainBranch(accountName, repoSlug) {
      return this.client.get(Endpoints.v1.repos.branch.mainBranch(accountName, repoSlug));
    }
  }, {
    key: 'getRawSource',
    value: function getRawSource(accountName, repoSlug) {}
  }]);
  return Repos;
}();

var Users = function () {
  function Users(client) {
    classCallCheck(this, Users);

    this.client = client;
  }

  createClass(Users, [{
    key: 'getProfile',
    value: function getProfile(accountNameOrEmail) {
      return this.client.get(Endpoints.v1.users.byId(accountNameOrEmail));
    }
  }, {
    key: 'getFollowers',
    value: function getFollowers(accountNameOrEmail) {
      return this.client.get(Endpoints.v1.users.followers(accountNameOrEmail));
    }
  }, {
    key: 'getPlan',
    value: function getPlan(accountNameOrEmail) {
      return this.client.get(Endpoints.v1.users.plan(accountNameOrEmail));
    }
  }, {
    key: 'getEvents',
    value: function getEvents(accountNameOrEmail) {
      return this.client.get(Endpoints.v1.users.events(accountNameOrEmail));
    }
  }]);
  return Users;
}();

var BitBucketClient = function BitBucketClient(username, password) {
  classCallCheck(this, BitBucketClient);

  var client = axios.create({
    baseURL: 'https://api.bitbucket.org/',
    headers: {
      'Authorization': 'Basic ' + new Buffer(username + ':' + password).toString('base64')
    }
  });

  this.privileges = new Privileges(client);
  this.groups = new Groups(client);
  this.invitations = new Invitations(client);
  this.repos = new Repos(client);
  this.users = new Users(client);
};

module.exports = BitBucketClient;
