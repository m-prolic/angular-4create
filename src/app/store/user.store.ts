import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { User } from '../features/user/models/user.model';

export interface UserState extends EntityState<User> {}

@StoreConfig({ name: 'users' })
export class UserStore extends EntityStore<UserState, User> {
  constructor() {
    super();
  }
}
