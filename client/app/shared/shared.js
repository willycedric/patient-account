import {api} from './api';
import {posts} from './posts';
import {socket} from './socket';
import angular from 'angular';
export const shared = angular.module('shared', [])
  .constant('API', api)
  .factory('Posts', posts)
  .factory('Socket',socket);

