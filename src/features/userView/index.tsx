import useUser from 'hooks/useUser';

const UserView = () => {
  const { userInfo } = useUser();

  return (
    <div>
      {userInfo?.authenticators?.map((item) => {
        return (
          <div key={item.id}>
            {item.id}, {item.credentialDeviceType}, {item.counter}, {item.credentialID}, {item.credentialPublicKey}
          </div>
        );
      })}
    </div>
  );
};

export default UserView;
