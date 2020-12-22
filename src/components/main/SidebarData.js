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
    icon: <i title="" className="fas fa-thumbtack" aria-hidden="true"></i>,
    cName: 'my-goals'
  },
  {
    title: 'Create new goal',
    path: '/newGoal',
    icon: <i title="Create new goal" className="fa fa-plus" aria-hidden="true"></i>,
    cName: 'new-goal'
  },
  {
    title: 'Progress',
    path: '/progress',
    icon: <i title="Track your progress" className="fas fa-spinner" aria-hidden="true"></i>,
    cName: 'progress'
  },
  {
    title: 'Update your progress',
    path: '/updateProgress',
    icon: <i title="Update Progress" className="fas fa-check-circle" aria-hidden="true"></i>,
    cName: 'update-progress'
  },
  {
    title: 'Badges',
    path: '/badges',
    icon: <i title="Your Badges" className="fas fa-award" aria-hidden="true"></i>,
    cName: 'badges-page'
  }
];