var UserProfile = (function () {
  var uid = "";

  var getUid = function () {
    return uid; // Or pull this from cookie/localStorage
  };

  var setUid = function (_uid) {
    uid = _uid;
    console.log(uid);
    // Also set this in cookie/localStorage
  };

  return {
    getUid: getUid,
    setUid: setUid,
  };
})();

export default UserProfile;
