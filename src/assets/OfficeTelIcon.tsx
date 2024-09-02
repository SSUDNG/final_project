const OfficeTelIcon = ({ weight = 'default', className = '' }) => {
  switch (weight) {
    case 'fill':
      return (
        <svg viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <path
            d="M21.9497 21H19.6997V3H20.4497C20.6486 3 20.8394 2.92098 20.98 2.78033C21.1207 2.63968 21.1997 2.44891 21.1997 2.25C21.1997 2.05109 21.1207 1.86032 20.98 1.71967C20.8394 1.57902 20.6486 1.5 20.4497 1.5H3.94971C3.75079 1.5 3.56003 1.57902 3.41938 1.71967C3.27872 1.86032 3.19971 2.05109 3.19971 2.25C3.19971 2.44891 3.27872 2.63968 3.41938 2.78033C3.56003 2.92098 3.75079 3 3.94971 3H4.69971V21H2.44971C2.25079 21 2.06003 21.079 1.91938 21.2197C1.77872 21.3603 1.69971 21.5511 1.69971 21.75C1.69971 21.9489 1.77872 22.1397 1.91938 22.2803C2.06003 22.421 2.25079 22.5 2.44971 22.5H21.9497C22.1486 22.5 22.3394 22.421 22.48 22.2803C22.6207 22.1397 22.6997 21.9489 22.6997 21.75C22.6997 21.5511 22.6207 21.3603 22.48 21.2197C22.3394 21.079 22.1486 21 21.9497 21ZM8.44971 5.25H10.6997C10.8986 5.25 11.0894 5.32902 11.23 5.46967C11.3707 5.61032 11.4497 5.80109 11.4497 6C11.4497 6.19891 11.3707 6.38968 11.23 6.53033C11.0894 6.67098 10.8986 6.75 10.6997 6.75H8.44971C8.25079 6.75 8.06003 6.67098 7.91938 6.53033C7.77872 6.38968 7.69971 6.19891 7.69971 6C7.69971 5.80109 7.77872 5.61032 7.91938 5.46967C8.06003 5.32902 8.25079 5.25 8.44971 5.25ZM8.44971 9H10.6997C10.8986 9 11.0894 9.07902 11.23 9.21967C11.3707 9.36032 11.4497 9.55109 11.4497 9.75C11.4497 9.94891 11.3707 10.1397 11.23 10.2803C11.0894 10.421 10.8986 10.5 10.6997 10.5H8.44971C8.25079 10.5 8.06003 10.421 7.91938 10.2803C7.77872 10.1397 7.69971 9.94891 7.69971 9.75C7.69971 9.55109 7.77872 9.36032 7.91938 9.21967C8.06003 9.07902 8.25079 9 8.44971 9ZM7.69971 13.5C7.69971 13.3011 7.77872 13.1103 7.91938 12.9697C8.06003 12.829 8.25079 12.75 8.44971 12.75H10.6997C10.8986 12.75 11.0894 12.829 11.23 12.9697C11.3707 13.1103 11.4497 13.3011 11.4497 13.5C11.4497 13.6989 11.3707 13.8897 11.23 14.0303C11.0894 14.171 10.8986 14.25 10.6997 14.25H8.44971C8.25079 14.25 8.06003 14.171 7.91938 14.0303C7.77872 13.8897 7.69971 13.6989 7.69971 13.5ZM14.4497 21H9.94971V17.25H14.4497V21ZM15.9497 14.25H13.6997C13.5008 14.25 13.31 14.171 13.1694 14.0303C13.0287 13.8897 12.9497 13.6989 12.9497 13.5C12.9497 13.3011 13.0287 13.1103 13.1694 12.9697C13.31 12.829 13.5008 12.75 13.6997 12.75H15.9497C16.1486 12.75 16.3394 12.829 16.48 12.9697C16.6207 13.1103 16.6997 13.3011 16.6997 13.5C16.6997 13.6989 16.6207 13.8897 16.48 14.0303C16.3394 14.171 16.1486 14.25 15.9497 14.25ZM15.9497 10.5H13.6997C13.5008 10.5 13.31 10.421 13.1694 10.2803C13.0287 10.1397 12.9497 9.94891 12.9497 9.75C12.9497 9.55109 13.0287 9.36032 13.1694 9.21967C13.31 9.07902 13.5008 9 13.6997 9H15.9497C16.1486 9 16.3394 9.07902 16.48 9.21967C16.6207 9.36032 16.6997 9.55109 16.6997 9.75C16.6997 9.94891 16.6207 10.1397 16.48 10.2803C16.3394 10.421 16.1486 10.5 15.9497 10.5ZM15.9497 6.75H13.6997C13.5008 6.75 13.31 6.67098 13.1694 6.53033C13.0287 6.38968 12.9497 6.19891 12.9497 6C12.9497 5.80109 13.0287 5.61032 13.1694 5.46967C13.31 5.32902 13.5008 5.25 13.6997 5.25H15.9497C16.1486 5.25 16.3394 5.32902 16.48 5.46967C16.6207 5.61032 16.6997 5.80109 16.6997 6C16.6997 6.19891 16.6207 6.38968 16.48 6.53033C16.3394 6.67098 16.1486 6.75 15.9497 6.75Z"
            fill="currentColor"
          />
        </svg>
      );
    case 'light':
      return (
        <svg viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <path
            d="M21.9497 21.1875H19.5122V2.8125H20.4497C20.5989 2.8125 20.742 2.75324 20.8475 2.64775C20.9529 2.54226 21.0122 2.39918 21.0122 2.25C21.0122 2.10082 20.9529 1.95774 20.8475 1.85225C20.742 1.74676 20.5989 1.6875 20.4497 1.6875H3.94971C3.80052 1.6875 3.65745 1.74676 3.55196 1.85225C3.44647 1.95774 3.38721 2.10082 3.38721 2.25C3.38721 2.39918 3.44647 2.54226 3.55196 2.64775C3.65745 2.75324 3.80052 2.8125 3.94971 2.8125H4.88721V21.1875H2.44971C2.30052 21.1875 2.15745 21.2468 2.05196 21.3523C1.94647 21.4577 1.88721 21.6008 1.88721 21.75C1.88721 21.8992 1.94647 22.0423 2.05196 22.1477C2.15745 22.2532 2.30052 22.3125 2.44971 22.3125H21.9497C22.0989 22.3125 22.242 22.2532 22.3475 22.1477C22.4529 22.0423 22.5122 21.8992 22.5122 21.75C22.5122 21.6008 22.4529 21.4577 22.3475 21.3523C22.242 21.2468 22.0989 21.1875 21.9497 21.1875ZM6.01221 2.8125H18.3872V21.1875H15.0122V17.25C15.0122 17.1008 14.9529 16.9577 14.8475 16.8523C14.742 16.7468 14.5989 16.6875 14.4497 16.6875H9.94971C9.80052 16.6875 9.65745 16.7468 9.55196 16.8523C9.44647 16.9577 9.38721 17.1008 9.38721 17.25V21.1875H6.01221V2.8125ZM13.8872 21.1875H10.5122V17.8125H13.8872V21.1875ZM8.63721 6C8.63721 5.85082 8.69647 5.70774 8.80196 5.60225C8.90745 5.49676 9.05052 5.4375 9.19971 5.4375H10.6997C10.8489 5.4375 10.992 5.49676 11.0975 5.60225C11.2029 5.70774 11.2622 5.85082 11.2622 6C11.2622 6.14918 11.2029 6.29226 11.0975 6.39775C10.992 6.50324 10.8489 6.5625 10.6997 6.5625H9.19971C9.05052 6.5625 8.90745 6.50324 8.80196 6.39775C8.69647 6.29226 8.63721 6.14918 8.63721 6ZM13.1372 6C13.1372 5.85082 13.1965 5.70774 13.302 5.60225C13.4074 5.49676 13.5505 5.4375 13.6997 5.4375H15.1997C15.3489 5.4375 15.492 5.49676 15.5975 5.60225C15.7029 5.70774 15.7622 5.85082 15.7622 6C15.7622 6.14918 15.7029 6.29226 15.5975 6.39775C15.492 6.50324 15.3489 6.5625 15.1997 6.5625H13.6997C13.5505 6.5625 13.4074 6.50324 13.302 6.39775C13.1965 6.29226 13.1372 6.14918 13.1372 6ZM8.63721 9.75C8.63721 9.60082 8.69647 9.45774 8.80196 9.35225C8.90745 9.24676 9.05052 9.1875 9.19971 9.1875H10.6997C10.8489 9.1875 10.992 9.24676 11.0975 9.35225C11.2029 9.45774 11.2622 9.60082 11.2622 9.75C11.2622 9.89918 11.2029 10.0423 11.0975 10.1477C10.992 10.2532 10.8489 10.3125 10.6997 10.3125H9.19971C9.05052 10.3125 8.90745 10.2532 8.80196 10.1477C8.69647 10.0423 8.63721 9.89918 8.63721 9.75ZM13.1372 9.75C13.1372 9.60082 13.1965 9.45774 13.302 9.35225C13.4074 9.24676 13.5505 9.1875 13.6997 9.1875H15.1997C15.3489 9.1875 15.492 9.24676 15.5975 9.35225C15.7029 9.45774 15.7622 9.60082 15.7622 9.75C15.7622 9.89918 15.7029 10.0423 15.5975 10.1477C15.492 10.2532 15.3489 10.3125 15.1997 10.3125H13.6997C13.5505 10.3125 13.4074 10.2532 13.302 10.1477C13.1965 10.0423 13.1372 9.89918 13.1372 9.75ZM9.19971 14.0625C9.05052 14.0625 8.90745 14.0032 8.80196 13.8977C8.69647 13.7923 8.63721 13.6492 8.63721 13.5C8.63721 13.3508 8.69647 13.2077 8.80196 13.1023C8.90745 12.9968 9.05052 12.9375 9.19971 12.9375H10.6997C10.8489 12.9375 10.992 12.9968 11.0975 13.1023C11.2029 13.2077 11.2622 13.3508 11.2622 13.5C11.2622 13.6492 11.2029 13.7923 11.0975 13.8977C10.992 14.0032 10.8489 14.0625 10.6997 14.0625H9.19971ZM13.1372 13.5C13.1372 13.3508 13.1965 13.2077 13.302 13.1023C13.4074 12.9968 13.5505 12.9375 13.6997 12.9375H15.1997C15.3489 12.9375 15.492 12.9968 15.5975 13.1023C15.7029 13.2077 15.7622 13.3508 15.7622 13.5C15.7622 13.6492 15.7029 13.7923 15.5975 13.8977C15.492 14.0032 15.3489 14.0625 15.1997 14.0625H13.6997C13.5505 14.0625 13.4074 14.0032 13.302 13.8977C13.1965 13.7923 13.1372 13.6492 13.1372 13.5Z"
            fill="currentColor"
          />
        </svg>
      );
  }
};

export default OfficeTelIcon;