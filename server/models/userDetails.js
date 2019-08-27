class User{
  constructor (
    username,
    password,
    email,
    valid,
    isActivated,
    ofSuperAdminInRole,
    ofGroupAdminInRole,
    ofGroupAssistInRole,
    groupList,
    adminGroupList

  )
  {
    this.username=username;
    this.password=password;
    this.email=email;
    this.valid=valid;
    this.isActivated=isActivated;
    this.ofSuperAdminInRole=ofSuperAdminInRole;
    this.ofGroupAdminInRole=ofGroupAdminInRole;
    this.ofGroupAssistInRole=ofGroupAssistInRole;
    this.groupList=groupList;
    this.adminGroupList=adminGroupList
  }
}

module.exports ={
  User,
};
