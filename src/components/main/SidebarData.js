import React from 'react';

export const SidebarData = [
  {
    title: 'Home',
    path: '/dashboard',
    icon: <i title="home" className="fa fa-home" aria-hidden="true"></i>,
    cName: 'home-page'
  },
  {
    title: 'My Goals',
    path: '/myGoals',
    icon: <i className="fas fa-thumbtack" aria-hidden="true"></i>,
    cName: 'my-goals'
  },
  {
    title: 'Create new goal',
    path: '/newGoal',
    icon: <i className="fa fa-plus" aria-hidden="true"></i>,
    cName: 'new-goal'
  },
  {
    title: 'Progress',
    path: '/progress',
    icon: <i className="fas fa-spinner" aria-hidden="true"></i>,
    cName: 'progress'
  },
  {
    title: 'Update your progress',
    path: '/updateProgress',
    icon: <i className="fas fa-check-circle" aria-hidden="true"></i>,
    cName: 'update-progress'
  },
  {
    title: 'Badges',
    path: '/badges',
    icon: <i className="fas fa-award" aria-hidden="true"></i>,
    cName: 'badges-page'
  }
];