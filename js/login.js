$('#google-button').on('click', function() {
    // Initialize with your OAuth.io app public key
    OAuth.initialize('pSKp4qi51866qhIR4oCPmnRXquU');
    // Use popup for OAuth
    OAuth.popup('google').then(google => {
      console.log('google:',google);
      // Retrieves user data from oauth provider
      // Prompts 'welcome' message with User's email on successful login
      // #me() is a convenient method to retrieve user data without requiring you
      // to know which OAuth provider url to call
      google.me().then(data => {
        console.log('me data:', data);
        alert('Google says your email is:' + data.email + ".\nView browser 'Console Log' for more details");
      });
      // Retrieves user data from OAuth provider by using #get() and
      // OAuth provider url
      google.get('/plus/v1/people/me').then(data => {
        console.log('self data:', data);
      })
    });
  })