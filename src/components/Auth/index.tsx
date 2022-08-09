import { FC } from "react";
import GoogleLogin from "react-google-login";
import { useEffect } from "react";
import { gapi } from "gapi-script";

const clientId =
  "832824951472-cuq40l45pr5n6ao0dii4rtq5j2lm4nbc.apps.googleusercontent.com";

const Auth: FC = () => {
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: "",
      });
    }

    gapi.load("client:auth2", start);
  }, []);

  const onSuccess = (res) => {
    console.log("success", res);
  };
  const onFailed = (res) => {
    console.log("Failed", res);
  };
  return (
    <section className="auth">
      <div id="signInButton">
        <div className="row vh-100 align-items-center">
          <div>
            <div className="d-flex justify-content-center m-4">
              <GoogleLogin
                clientId={clientId}
                buttonText="Log in with Google"
                onSuccess={onSuccess}
                onFailure={onFailed}
                cookiePolicy={"single_host_origin"}
                // isSignedIn={true}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Auth;
