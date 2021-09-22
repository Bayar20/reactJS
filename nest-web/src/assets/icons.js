import React from "react";
import { mapTypeStyleToFill } from "../components";
import { mapRoleToBackgroundColor, mapRoleToTextColor } from "../theme";

export const Ellipse = (props) => {
  let { width, height } = props;
  return (
    <svg
      width={width || 8}
      height={height || 9}
      viewBox="0 0 8 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="3.71257" cy="4.39519" r="3.71257" fill="#BC31EA" />
    </svg>
  );
};
export const Cross = (props) => {
  let { width, height } = props;
  return (
    <svg
      width={width || 16}
      height={height || 16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M1 1L15 15" stroke="#303030" stroke-width="2" />
      <path d="M15 1L1 15" stroke="#303030" stroke-width="2" />
    </svg>
  );
};
export const LogoSymbol = (props) => {
  let { width, height } = props;
  return (
    <svg
      width={width || 54}
      height={height || 52}
      viewBox="0 0 54 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M30.8571 14.6386V22.1364L23.1429 14.6386H16.4571V10.7782L12.8615 7.17945C12.8586 7.09979 12.8571 7.01976 12.8571 6.93939C12.8571 3.38302 15.7353 0.5 19.2857 0.5C22.8361 0.5 25.7143 3.38302 25.7143 6.93939V13.1274L28.2857 15.7001V6.93939C28.2857 3.38302 31.1639 0.5 34.7143 0.5C38.2647 0.5 41.1429 3.38302 41.1429 6.93939C41.1429 7.01976 41.1414 7.09979 41.1385 7.17945L37.5429 10.7782V14.6386H30.8571ZM48.3676 22.1364L50.3213 20.1778C52.496 21.2102 54 23.4292 54 26C54 28.5708 52.496 30.7898 50.3213 31.8222L48.3676 29.8636H40.1143V22.1364H48.3676ZM40.1143 32.4394H46.7703C48.7787 33.5285 50.1429 35.6577 50.1429 38.1061C50.1429 41.4102 47.6586 44.133 44.4589 44.5027L40.1143 40.1543V32.4394ZM37.5429 41.2218L41.1385 44.8206C41.1414 44.9002 41.1429 44.9802 41.1429 45.0606C41.1429 48.617 38.2647 51.5 34.7143 51.5C31.1639 51.5 28.2857 48.617 28.2857 45.0606V38.888L25.7143 36.3123V45.0606C25.7143 48.617 22.8361 51.5 19.2857 51.5C15.7353 51.5 12.8571 48.617 12.8571 45.0606C12.8571 44.9802 12.8586 44.9002 12.8615 44.8206L16.4571 41.2218V37.3614H23.1429V29.8636L30.8571 37.3614H37.5429V41.2218ZM40.1143 19.5606V11.8457L44.4589 7.49728C47.6586 7.86697 50.1429 10.5898 50.1429 13.8939C50.1429 16.3423 48.7787 18.4715 46.7703 19.5606H40.1143ZM5.63239 29.8636L3.67869 31.8222C1.50398 30.7898 0 28.5708 0 26C0 23.4292 1.50398 21.2102 3.67869 20.1778L5.63239 22.1364H13.8857V29.8636H5.63239ZM7.22971 19.5606C5.22126 18.4715 3.85714 16.3423 3.85714 13.8939C3.85714 10.5898 6.34145 7.86697 9.54107 7.49728L13.8857 11.8457V19.5606H7.22971ZM13.8857 32.4394V40.1543L9.54107 44.5027C6.34145 44.133 3.85714 41.4102 3.85714 38.1061C3.85714 35.6577 5.22126 33.5285 7.22971 32.4394H13.8857Z"
        fill="#00DCF0"
      />
    </svg>
  );
};
export const Slack = (props) => {
  let { width, height } = props;
  return (
    <svg
      width={width || 56}
      height={height || 56}
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M29.5623 19.8337C29.5623 22.1965 31.4711 24.1053 33.834 24.1053C36.1968 24.1053 38.1057 22.1965 38.1057 19.8337V8.16699C38.1057 5.80414 36.1968 3.89532 33.834 3.89532C31.4711 3.89532 29.5623 5.80414 29.5623 8.16699V19.8337Z"
        fill="#2EB67D"
        stroke="#2EB67D"
        stroke-width="1.54335"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M43.5604 23.333C43.5604 23.7592 43.9058 24.1047 44.332 24.1047H47.832C50.1949 24.1047 52.1037 22.1959 52.1037 19.833C52.1037 17.4702 50.1949 15.5613 47.832 15.5613C45.4692 15.5613 43.5604 17.4702 43.5604 19.833V23.333Z"
        fill="#2EB67D"
        stroke="#2EB67D"
        stroke-width="1.54335"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M26.4396 36.167C26.4396 33.8041 24.5308 31.8953 22.168 31.8953C19.8051 31.8953 17.8963 33.8041 17.8963 36.167V47.8337C17.8963 50.1965 19.8051 52.1053 22.168 52.1053C24.5308 52.1053 26.4396 50.1965 26.4396 47.8337V36.167Z"
        fill="#E01E5A"
        stroke="#E01E5A"
        stroke-width="1.54335"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12.4377 32.667C12.4377 32.2408 12.0922 31.8953 11.666 31.8953H8.16602C5.80316 31.8953 3.89434 33.8041 3.89434 36.167C3.89434 38.5298 5.80316 40.4387 8.16602 40.4387C10.5289 40.4387 12.4377 38.5298 12.4377 36.167V32.667Z"
        fill="#E01E5A"
        stroke="#E01E5A"
        stroke-width="1.54335"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M36.166 29.5613C33.8032 29.5613 31.8943 31.4702 31.8943 33.833C31.8943 36.1959 33.8032 38.1047 36.166 38.1047H47.8327C50.1955 38.1047 52.1044 36.1959 52.1044 33.833C52.1044 31.4702 50.1955 29.5613 47.8327 29.5613H36.166Z"
        fill="#ECB22E"
        stroke="#ECB22E"
        stroke-width="1.54335"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M32.666 43.5613C32.2398 43.5613 31.8943 43.9068 31.8943 44.333V47.833C31.8943 50.1959 33.8032 52.1047 36.166 52.1047C38.5289 52.1047 40.4377 50.1959 40.4377 47.833C40.4377 45.4702 38.5289 43.5613 36.166 43.5613H32.666Z"
        fill="#ECB22E"
        stroke="#ECB22E"
        stroke-width="1.54335"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M24.1044 22.167C24.1044 19.8041 22.1955 17.8953 19.8327 17.8953H8.16602C5.80316 17.8953 3.89434 19.8041 3.89434 22.167C3.89434 24.5298 5.80316 26.4387 8.16602 26.4387H19.8327C22.1955 26.4387 24.1044 24.5298 24.1044 22.167Z"
        fill="#36C5F0"
        stroke="#36C5F0"
        stroke-width="1.54335"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M23.334 12.4387C23.7602 12.4387 24.1057 12.0932 24.1057 11.667V8.16699C24.1057 5.80414 22.1968 3.89532 19.834 3.89532C17.4711 3.89532 15.5623 5.80414 15.5623 8.16699C15.5623 10.5298 17.4711 12.4387 19.834 12.4387H23.334Z"
        fill="#36C5F0"
        stroke="#36C5F0"
        stroke-width="1.54335"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
export const CheckCircleIcon = (props) => {
  let { width, height } = props;
  return (
    <svg
      width={width || 35}
      height={height || 35}
      viewBox="0 0 35 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.4994 32.0833C9.44497 32.0833 2.91602 25.5543 2.91602 17.5C2.91602 9.44559 9.44497 2.91663 17.4994 2.91663C25.5537 2.91663 32.0827 9.44559 32.0827 17.5C32.0827 25.5543 25.5537 32.0833 17.4994 32.0833ZM16.0454 23.3333L26.3558 13.0214L24.2937 10.9593L16.0454 19.2091L11.9198 15.0835L9.85768 17.1456L16.0454 23.3333Z"
        fill="#00DCF0"
      />
    </svg>
  );
};

export const HashtagIcon = (props) => {
  let { width, height } = props;
  return (
    <svg
      width={width || 33}
      height={height || 33}
      viewBox="0 0 35 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.83398 13.125H29.1673"
        stroke="#00DCF0"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M5.83398 21.875H29.1673"
        stroke="#00DCF0"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M14.5827 4.375L11.666 30.625"
        stroke="#00DCF0"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M23.3327 4.375L20.416 30.625"
        stroke="#00DCF0"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
export const FacebookIcon = (props) => {
  let { role, width, height } = props;
  return (
    <svg
      width={width || 24}
      height={height || 24}
      viewBox="0 0 24 24"
      fill={role || "#FAFAFA"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47 14 5.5 16 5.5H17.5V2.14C17.174 2.097 15.943 2 14.643 2C11.928 2 10 3.657 10 6.7V9.5H7V13.5H10V22H14V13.5Z"
        fill=""
      />
    </svg>
  );
};
export const InstagramIcon = (props) => {
  let { role, width, height } = props;
  return (
    <svg
      width={width || 24}
      height={height || 24}
      viewBox="0 0 24 24"
      fill={role || "#FAFAFA"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 2C14.717 2 15.056 2.01 16.122 2.06C17.187 2.11 17.912 2.277 18.55 2.525C19.21 2.779 19.766 3.123 20.322 3.678C20.8305 4.1779 21.224 4.78259 21.475 5.45C21.722 6.087 21.89 6.813 21.94 7.878C21.987 8.944 22 9.283 22 12C22 14.717 21.99 15.056 21.94 16.122C21.89 17.187 21.722 17.912 21.475 18.55C21.2247 19.2178 20.8311 19.8226 20.322 20.322C19.822 20.8303 19.2173 21.2238 18.55 21.475C17.913 21.722 17.187 21.89 16.122 21.94C15.056 21.987 14.717 22 12 22C9.283 22 8.944 21.99 7.878 21.94C6.813 21.89 6.088 21.722 5.45 21.475C4.78233 21.2245 4.17753 20.8309 3.678 20.322C3.16941 19.8222 2.77593 19.2175 2.525 18.55C2.277 17.913 2.11 17.187 2.06 16.122C2.013 15.056 2 14.717 2 12C2 9.283 2.01 8.944 2.06 7.878C2.11 6.812 2.277 6.088 2.525 5.45C2.77524 4.78218 3.1688 4.17732 3.678 3.678C4.17767 3.16923 4.78243 2.77573 5.45 2.525C6.088 2.277 6.812 2.11 7.878 2.06C8.944 2.013 9.283 2 12 2ZM12 7C10.6739 7 9.40215 7.52678 8.46447 8.46447C7.52678 9.40215 7 10.6739 7 12C7 13.3261 7.52678 14.5979 8.46447 15.5355C9.40215 16.4732 10.6739 17 12 17C13.3261 17 14.5979 16.4732 15.5355 15.5355C16.4732 14.5979 17 13.3261 17 12C17 10.6739 16.4732 9.40215 15.5355 8.46447C14.5979 7.52678 13.3261 7 12 7ZM18.5 6.75C18.5 6.41848 18.3683 6.10054 18.1339 5.86612C17.8995 5.6317 17.5815 5.5 17.25 5.5C16.9185 5.5 16.6005 5.6317 16.3661 5.86612C16.1317 6.10054 16 6.41848 16 6.75C16 7.08152 16.1317 7.39946 16.3661 7.63388C16.6005 7.8683 16.9185 8 17.25 8C17.5815 8 17.8995 7.8683 18.1339 7.63388C18.3683 7.39946 18.5 7.08152 18.5 6.75ZM12 9C12.7956 9 13.5587 9.31607 14.1213 9.87868C14.6839 10.4413 15 11.2044 15 12C15 12.7956 14.6839 13.5587 14.1213 14.1213C13.5587 14.6839 12.7956 15 12 15C11.2044 15 10.4413 14.6839 9.87868 14.1213C9.31607 13.5587 9 12.7956 9 12C9 11.2044 9.31607 10.4413 9.87868 9.87868C10.4413 9.31607 11.2044 9 12 9Z"
        fill=""
      />
    </svg>
  );
};
export const LinkedInIcon = (props) => {
  let { role, width, height } = props;
  return (
    <svg
      width={width || 24}
      height={height || 24}
      viewBox="0 0 24 24"
      fill={role || "#FAFAFA"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.94 5.00002C6.93974 5.53046 6.72877 6.03906 6.35351 6.41394C5.97825 6.78883 5.46944 6.99929 4.939 6.99902C4.40857 6.99876 3.89997 6.78779 3.52508 6.41253C3.1502 6.03727 2.93974 5.52846 2.94 4.99802C2.94027 4.46759 3.15124 3.95899 3.5265 3.5841C3.90176 3.20922 4.41057 2.99876 4.941 2.99902C5.47144 2.99929 5.98004 3.21026 6.35492 3.58552C6.72981 3.96078 6.94027 4.46959 6.94 5.00002ZM7 8.48002H3V21H7V8.48002ZM13.32 8.48002H9.34V21H13.28V14.43C13.28 10.77 18.05 10.43 18.05 14.43V21H22V13.07C22 6.90002 14.94 7.13002 13.28 10.16L13.32 8.48002Z"
        fill=""
      />
    </svg>
  );
};

export const GithubIcon = (props) => {
  let { role, width, height } = props;
  return (
    <svg
      width={width || "24"}
      height={height || "24"}
      viewBox="0 0 24 24"
      fill={role || "#FAFAFA"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.9997 0.333344C5.55384 0.333344 0.33301 5.55418 0.33301 12C0.331686 14.4492 1.10163 16.8366 2.53359 18.8235C3.96556 20.8104 5.98685 22.2959 8.31068 23.0693C8.89401 23.1708 9.11217 22.8208 9.11217 22.514C9.11217 22.2375 9.09701 21.3193 9.09701 20.3417C6.16634 20.8818 5.40801 19.6277 5.17468 18.9708C5.04284 18.6348 4.47468 17.6 3.97884 17.3223C3.57051 17.1042 2.98718 16.564 3.96368 16.55C4.88301 16.5348 5.53868 17.3958 5.75801 17.7458C6.80801 19.5098 8.48568 19.014 9.15534 18.7083C9.25801 17.95 9.56368 17.4402 9.89968 17.1485C7.30384 16.8568 4.59134 15.85 4.59134 11.3875C4.59134 10.1182 5.04284 9.06934 5.78718 8.25151C5.67051 7.95984 5.26218 6.76401 5.90384 5.15984C5.90384 5.15984 6.88034 4.85418 9.11217 6.35684C10.0619 6.09325 11.0432 5.96058 12.0288 5.96251C13.0205 5.96251 14.0122 6.09318 14.9455 6.35568C17.1762 4.83901 18.1538 5.16101 18.1538 5.16101C18.7955 6.76518 18.3872 7.96101 18.2705 8.25268C19.0137 9.06934 19.4663 10.1042 19.4663 11.3875C19.4663 15.8652 16.7398 16.8568 14.144 17.1485C14.5663 17.5125 14.9315 18.2125 14.9315 19.3068C14.9315 20.8667 14.9163 22.1208 14.9163 22.5152C14.9163 22.8208 15.1357 23.1848 15.719 23.0682C18.0349 22.2863 20.0472 20.7978 21.4729 18.8124C22.8985 16.8269 23.6657 14.4443 23.6663 12C23.6663 5.55418 18.4455 0.333344 11.9997 0.333344Z"
        fill=""
      />
    </svg>
  );
};
export const CheckMarkIcon = (props) => {
  let { role, width, height } = props;
  return (
    <svg
      width={width || 24}
      height={height || 24}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.863 18a1 1 0 01-.729-.315l-4.863-5.179a1 1 0 111.457-1.369l4.125 4.391 8.408-9.202a1 1 0 011.477 1.348l-9.137 10a.998.998 0 01-.73.326h-.008z"
        fill={mapRoleToTextColor(role || "primary")}
      />
      <mask
        id="prefix__a"
        maskUnits="userSpaceOnUse"
        x={4}
        y={6}
        width={16}
        height={12}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.863 18a1 1 0 01-.729-.315l-4.863-5.179a1 1 0 111.457-1.369l4.125 4.391 8.408-9.202a1 1 0 011.477 1.348l-9.137 10a.998.998 0 01-.73.326h-.008z"
          fill="#fff"
        />
      </mask>
    </svg>
  );
};

export const CheckMarkIconFull = (props) => {
  let { role, width = 12, height = 8 } = props;
  return (
    <svg
      width={width || 12}
      height={height || 8}
      viewBox="0 0 12 8"
      fill="none"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.575 8a.667.667 0 01-.486-.21L.847 4.337a.666.666 0 11.971-.912l2.75 2.927L10.174.217a.667.667 0 01.984.899L5.067 7.783A.665.665 0 014.58 8h-.005z"
        fill={role ? mapRoleToBackgroundColor(role) : "#fff"}
      />
    </svg>
  );
};

export const AlertTriangleIcon = (props) => {
  let { role, width, height } = props;
  return (
    <svg
      width={width || 24}
      height={height || 24}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11 9a1 1 0 012 0v4a1 1 0 01-2 0V9zm0 7a1 1 0 112 0 1 1 0 01-2 0zm9.865 2.353c-.23.405-.675.647-1.193.647H4.328c-.518 0-.964-.242-1.192-.647a.971.971 0 01.017-1.017l7.67-12.718c.468-.774 1.886-.774 2.353 0l7.672 12.718c.266.44.125.827.017 1.017zm1.696-2.05L14.889 3.584c-.6-.992-1.68-1.584-2.89-1.584-1.21 0-2.29.592-2.887 1.584L1.44 16.303a2.973 2.973 0 00-.046 3.033C1.973 20.363 3.098 21 4.328 21h15.344c1.23 0 2.355-.637 2.935-1.664.54-.956.523-2.09-.046-3.033z"
        fill={mapRoleToTextColor(role || "primary")}
      />
      <mask
        id="prefix__a"
        maskUnits="userSpaceOnUse"
        x={1}
        y={2}
        width={22}
        height={19}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11 9a1 1 0 012 0v4a1 1 0 01-2 0V9zm0 7a1 1 0 112 0 1 1 0 01-2 0zm9.865 2.353c-.23.405-.675.647-1.193.647H4.328c-.518 0-.964-.242-1.192-.647a.971.971 0 01.017-1.017l7.67-12.718c.468-.774 1.886-.774 2.353 0l7.672 12.718c.266.44.125.827.017 1.017zm1.696-2.05L14.889 3.584c-.6-.992-1.68-1.584-2.89-1.584-1.21 0-2.29.592-2.887 1.584L1.44 16.303a2.973 2.973 0 00-.046 3.033C1.973 20.363 3.098 21 4.328 21h15.344c1.23 0 2.355-.637 2.935-1.664.54-.956.523-2.09-.046-3.033z"
          fill="#fff"
        />
      </mask>
    </svg>
  );
};

export const ArrowCircleDownIcon = (props) => {
  let { role, width, height } = props;
  return (
    <svg
      width={width || 24}
      height={height || 24}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.31 12.414L13 13.664V8a1 1 0 10-2 0v5.586l-1.293-1.293a.999.999 0 10-1.414 1.414l3 3a.996.996 0 001.084.217c.06-.025.109-.068.162-.104.05-.033.107-.053.152-.096l3-2.863a1 1 0 00-1.381-1.447zM12 20c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm0-18C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2z"
        fill={mapRoleToTextColor(role || "primary")}
      />
      <mask
        id="prefix__a"
        maskUnits="userSpaceOnUse"
        x={2}
        y={2}
        width={20}
        height={20}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14.31 12.414L13 13.664V8a1 1 0 10-2 0v5.586l-1.293-1.293a.999.999 0 10-1.414 1.414l3 3a.996.996 0 001.084.217c.06-.025.109-.068.162-.104.05-.033.107-.053.152-.096l3-2.863a1 1 0 00-1.381-1.447zM12 20c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm0-18C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2z"
          fill="#fff"
        />
      </mask>
    </svg>
  );
};

export const ArrowCircleLeftIcon = (props) => {
  let { role, width, height } = props;
  return (
    <svg
      width={width || 24}
      height={height || 24}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 11h-5.664l1.25-1.31a1.001 1.001 0 00-1.447-1.38l-2.863 3c-.038.04-.055.09-.086.135-.041.059-.087.113-.114.181a.944.944 0 00-.057.283C7.016 11.94 7 11.968 7 12l.001.005a1.005 1.005 0 00.292.703l3 2.999a.997.997 0 001.414 0 .999.999 0 000-1.414L10.414 13H16a1 1 0 000-2zm-4 9c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm0-18C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2z"
        fill={mapRoleToTextColor(role || "primary")}
      />
      <mask
        id="prefix__a"
        maskUnits="userSpaceOnUse"
        x={2}
        y={2}
        width={20}
        height={20}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16 11h-5.664l1.25-1.31a1.001 1.001 0 00-1.447-1.38l-2.863 3c-.038.04-.055.09-.086.135-.041.059-.087.113-.114.181a.944.944 0 00-.057.283C7.016 11.94 7 11.968 7 12l.001.005a1.005 1.005 0 00.292.703l3 2.999a.997.997 0 001.414 0 .999.999 0 000-1.414L10.414 13H16a1 1 0 000-2zm-4 9c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm0-18C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2z"
          fill="#fff"
        />
      </mask>
    </svg>
  );
};

export const ArrowCircleRightIcon = (props) => {
  let { role, width, height } = props;
  return (
    <svg
      width={width || 24}
      height={height || 24}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.999 12.005L17 12c0-.033-.016-.06-.019-.092a.937.937 0 00-.057-.282c-.027-.068-.073-.122-.114-.182-.031-.044-.048-.095-.086-.135l-2.863-3a1 1 0 10-1.447 1.381l1.25 1.31H8a1 1 0 100 2h5.586l-1.293 1.293a.999.999 0 101.414 1.414l3-3a.994.994 0 00.292-.702zM12 20c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm0-18C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2z"
        fill={mapRoleToTextColor(role || "primary")}
      />
      <mask
        id="prefix__a"
        maskUnits="userSpaceOnUse"
        x={2}
        y={2}
        width={20}
        height={20}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16.999 12.005L17 12c0-.033-.016-.06-.019-.092a.937.937 0 00-.057-.282c-.027-.068-.073-.122-.114-.182-.031-.044-.048-.095-.086-.135l-2.863-3a1 1 0 10-1.447 1.381l1.25 1.31H8a1 1 0 100 2h5.586l-1.293 1.293a.999.999 0 101.414 1.414l3-3a.994.994 0 00.292-.702zM12 20c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm0-18C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2z"
          fill="#fff"
        />
      </mask>
    </svg>
  );
};

export const ArrowCircleUpIcon = (props) => {
  let { role, width, height } = props;
  return (
    <svg
      width={width || 24}
      height={height || 24}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.707 7.293a.978.978 0 00-.322-.215.978.978 0 00-.38-.077H12c-.036 0-.066.015-.101.02-.092.01-.184.02-.271.054-.07.029-.126.075-.187.117-.042.03-.091.047-.13.085l-3 2.862a1.001 1.001 0 001.38 1.447l1.31-1.25V16a1 1 0 002 0v-5.585l1.293 1.293a1 1 0 001.415-1.415l-3-3zM12 20c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm0-18C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2z"
        fill={mapRoleToTextColor(role || "primary")}
      />
    </svg>
  );
};

export const ArrowDownIcon = (props) => {
  let { role, width, height } = props;
  return (
    <svg
      width={width || 24}
      height={height || 24}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.768 13.36a1 1 0 00-1.408-.128L13 16.865V5a1 1 0 00-2 0v11.865l-4.36-3.633a1 1 0 10-1.28 1.536l6 5c.047.04.103.059.155.089.041.024.077.052.122.07A.992.992 0 0012 20a.992.992 0 00.363-.073c.045-.018.081-.046.122-.07.052-.03.108-.049.155-.089l6-5a1 1 0 00.128-1.408z"
        fill={mapRoleToTextColor(role || "primary")}
      />
      <mask
        id="prefix__a"
        maskUnits="userSpaceOnUse"
        x={5}
        y={4}
        width={15}
        height={16}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M18.768 13.36a1 1 0 00-1.408-.128L13 16.865V5a1 1 0 00-2 0v11.865l-4.36-3.633a1 1 0 10-1.28 1.536l6 5c.047.04.103.059.155.089.041.024.077.052.122.07A.992.992 0 0012 20a.992.992 0 00.363-.073c.045-.018.081-.046.122-.07.052-.03.108-.049.155-.089l6-5a1 1 0 00.128-1.408z"
          fill="#fff"
        />
      </mask>
    </svg>
  );
};

export const ArrowLeftIcon = (props) => {
  let { role, width, height } = props;
  return (
    <svg
      width={width || 24}
      height={height || 24}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19 11H7.135l3.633-4.36a1 1 0 10-1.536-1.28l-5 6c-.039.047-.059.102-.088.154-.024.042-.053.078-.071.124a.985.985 0 00-.072.358L4 12l.001.004c0 .122.027.243.072.358.018.046.047.082.071.124.029.052.049.107.088.154l5 6a.999.999 0 101.536-1.28L7.135 13H19a1 1 0 000-2z"
        fill={mapRoleToTextColor(role || "primary")}
      />
      <mask
        id="prefix__a"
        maskUnits="userSpaceOnUse"
        x={4}
        y={5}
        width={16}
        height={14}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M19 11H7.135l3.633-4.36a1 1 0 10-1.536-1.28l-5 6c-.039.047-.059.102-.088.154-.024.042-.053.078-.071.124a.985.985 0 00-.072.358L4 12l.001.004c0 .122.027.243.072.358.018.046.047.082.071.124.029.052.049.107.088.154l5 6a.999.999 0 101.536-1.28L7.135 13H19a1 1 0 000-2z"
          fill="#fff"
        />
      </mask>
    </svg>
  );
};

export const ArrowRightIcon = (props) => {
  let { role, width, height, fill } = props;
  return (
    <svg
      width={width || 24}
      height={height || 24}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 13h11.865l-3.633 4.36a1 1 0 101.537 1.28l5-6c.039-.047.058-.102.087-.154.024-.042.053-.078.071-.124a.985.985 0 00.072-.358L20 12l-.001-.004a.985.985 0 00-.072-.358c-.018-.046-.047-.082-.071-.124-.029-.052-.048-.107-.087-.154l-5-6a1.002 1.002 0 00-1.409-.128 1 1 0 00-.128 1.408L16.865 11H5a1 1 0 000 2z"
        fill={fill || mapRoleToTextColor(role || "primary")}
      />
      <mask
        id="prefix__a"
        maskUnits="userSpaceOnUse"
        x={4}
        y={5}
        width={16}
        height={14}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5 13h11.865l-3.633 4.36a1 1 0 101.537 1.28l5-6c.039-.047.058-.102.087-.154.024-.042.053-.078.071-.124a.985.985 0 00.072-.358L20 12l-.001-.004a.985.985 0 00-.072-.358c-.018-.046-.047-.082-.071-.124-.029-.052-.048-.107-.087-.154l-5-6a1.002 1.002 0 00-1.409-.128 1 1 0 00-.128 1.408L16.865 11H5a1 1 0 000 2z"
          fill="#fff"
        />
      </mask>
    </svg>
  );
};

export const ArrowUpIcon = (props) => {
  let { role, width = 16, height = 16 } = props;
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.232 10.64a1 1 0 001.408.128L11 7.135V19a1 1 0 002 0V7.135l4.36 3.633a1 1 0 101.28-1.536l-6-5c-.047-.04-.103-.059-.155-.089-.041-.024-.077-.052-.122-.07A.992.992 0 0012 4a.992.992 0 00-.363.073c-.045.018-.081.046-.122.07-.052.03-.108.05-.155.09l-6 5a1 1 0 00-.128 1.407z"
        fill={mapRoleToTextColor(role)}
      />
      <mask
        id="prefix__a"
        maskUnits="userSpaceOnUse"
        x={5}
        y={4}
        width={15}
        height={17}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.232 10.64a1 1 0 001.408.128L11 7.135V19a1 1 0 002 0V7.135l4.36 3.633a1 1 0 101.28-1.536l-6-5c-.047-.04-.103-.059-.155-.089-.041-.024-.077-.052-.122-.07A.992.992 0 0012 4a.992.992 0 00-.363.073c-.045.018-.081.046-.122.07-.052.03-.108.05-.155.09l-6 5a1 1 0 00-.128 1.407z"
          fill="#fff"
        />
      </mask>
    </svg>
  );
};

export const CloseCircleIcon = (props) => {
  let { role, width, height } = props;
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.707 9.293a.999.999 0 00-1.414 0L12 10.586l-1.293-1.293a.999.999 0 10-1.414 1.414L10.586 12l-1.293 1.293a.999.999 0 101.414 1.414L12 13.414l1.293 1.293a.997.997 0 001.414 0 .999.999 0 000-1.414L13.414 12l1.293-1.293a.999.999 0 000-1.414zM12 20c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm0-18C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2z"
        fill={mapRoleToTextColor(role)}
      />
      <mask
        id="prefix__a"
        maskUnits="userSpaceOnUse"
        x={2}
        y={2}
        width={20}
        height={20}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14.707 9.293a.999.999 0 00-1.414 0L12 10.586l-1.293-1.293a.999.999 0 10-1.414 1.414L10.586 12l-1.293 1.293a.999.999 0 101.414 1.414L12 13.414l1.293 1.293a.997.997 0 001.414 0 .999.999 0 000-1.414L13.414 12l1.293-1.293a.999.999 0 000-1.414zM12 20c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm0-18C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2z"
          fill="#fff"
        />
      </mask>
    </svg>
  );
};

export const CloseIcon = (props) => {
  let { role, width, height } = props;
  return (
    <svg
      width={width || 24}
      height={height || 24}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.414 12l4.293-4.293a.999.999 0 10-1.414-1.414L12 10.586 7.707 6.293a.999.999 0 10-1.414 1.414L10.586 12l-4.293 4.293a.999.999 0 101.414 1.414L12 13.414l4.293 4.293a.997.997 0 001.414 0 .999.999 0 000-1.414L13.414 12z"
        fill={mapRoleToBackgroundColor(role)}
      />
      <mask
        id="prefix__a"
        maskUnits="userSpaceOnUse"
        x={5}
        y={5}
        width={14}
        height={13}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.414 12l4.293-4.293a.999.999 0 10-1.414-1.414L12 10.586 7.707 6.293a.999.999 0 10-1.414 1.414L10.586 12l-4.293 4.293a.999.999 0 101.414 1.414L12 13.414l4.293 4.293a.997.997 0 001.414 0 .999.999 0 000-1.414L13.414 12z"
          fill="#fff"
        />
      </mask>
    </svg>
  );
};

export const HandDriveIcon = (props) => {
  let { role, width, height } = props;
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 16c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1-1-.45-1-1zm5-1h4c.55 0 1 .45 1 1s-.45 1-1 1h-4c-.55 0-1-.45-1-1s.45-1 1-1zm6 4H6c-.551 0-1-.448-1-1v-5h14v5c0 .552-.449 1-1 1zM8.342 5.553A.994.994 0 019.236 5h5.528c.381 0 .724.212.894.553L18.382 11H5.618l2.724-5.447zm12.447 5.789l-3.342-6.684A2.984 2.984 0 0014.764 3H9.236a2.984 2.984 0 00-2.683 1.658l-3.342 6.684a2.012 2.012 0 00-.211.894V18c0 1.654 1.346 3 3 3h12c1.654 0 3-1.346 3-3v-5.764c0-.308-.073-.618-.211-.894z"
        fill={mapRoleToTextColor(role)}
      />
      <mask
        id="prefix__a"
        maskUnits="userSpaceOnUse"
        x={3}
        y={3}
        width={18}
        height={18}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7 16c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1-1-.45-1-1zm5-1h4c.55 0 1 .45 1 1s-.45 1-1 1h-4c-.55 0-1-.45-1-1s.45-1 1-1zm6 4H6c-.551 0-1-.448-1-1v-5h14v5c0 .552-.449 1-1 1zM8.342 5.553A.994.994 0 019.236 5h5.528c.381 0 .724.212.894.553L18.382 11H5.618l2.724-5.447zm12.447 5.789l-3.342-6.684A2.984 2.984 0 0014.764 3H9.236a2.984 2.984 0 00-2.683 1.658l-3.342 6.684a2.012 2.012 0 00-.211.894V18c0 1.654 1.346 3 3 3h12c1.654 0 3-1.346 3-3v-5.764c0-.308-.073-.618-.211-.894z"
          fill="#fff"
        />
      </mask>
    </svg>
  );
};

export const LogInIcon = (props) => {
  let { role, width = 24, height = 24 } = props;
  return (
    <svg
      {...props}
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17 4h2c.55 0 1 .45 1 1v14c0 .55-.45 1-1 1h-2c-.55 0-1-.45-1-1s.45-1 1-1h1V6h-1c-.55 0-1-.45-1-1s.45-1 1-1zm-6.6 3.2a1 1 0 011.4.2l3 4c.26.346.268.82.018 1.175l-2.814 4a.999.999 0 01-1.393.243 1 1 0 01-.243-1.394l1.718-2.442a.2.2 0 00-.039.01c-.015.004-.03.008-.047.008H4a1 1 0 010-2h8l-1.8-2.4a.999.999 0 01.2-1.4z"
        fill={mapRoleToTextColor(role)}
      />
      <mask
        id="prefix__a"
        maskUnits="userSpaceOnUse"
        x={2}
        y={4}
        width={18}
        height={16}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M17 4h2c.55 0 1 .45 1 1v14c0 .55-.45 1-1 1h-2c-.55 0-1-.45-1-1s.45-1 1-1h1V6h-1c-.55 0-1-.45-1-1s.45-1 1-1zm-6.6 3.2a1 1 0 011.4.2l3 4c.26.346.268.82.018 1.175l-2.814 4a.999.999 0 01-1.393.243 1 1 0 01-.243-1.394l1.718-2.442a.2.2 0 00-.039.01c-.015.004-.03.008-.047.008H4a1 1 0 010-2h8l-1.8-2.4a.999.999 0 01.2-1.4z"
          fill="#fff"
        />
      </mask>
    </svg>
  );
};

export const MonitorIcon = (props) => {
  let { role, width = 16, height = 16 } = props;
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20 14c0 .551-.448 1-1 1H5c-.552 0-1-.449-1-1V6c0-.551.448-1 1-1h14c.552 0 1 .449 1 1v8zM19 3H5C3.346 3 2 4.346 2 6v8c0 1.654 1.346 3 3 3h6v2H7c-.55 0-1 .45-1 1s.45 1 1 1h10c.55 0 1-.45 1-1s-.45-1-1-1h-4v-2h6c1.654 0 3-1.346 3-3V6c0-1.654-1.346-3-3-3z"
        fill={mapRoleToTextColor(role)}
      />
      <mask
        id="prefix__a"
        maskUnits="userSpaceOnUse"
        x={2}
        y={3}
        width={20}
        height={18}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M20 14c0 .551-.448 1-1 1H5c-.552 0-1-.449-1-1V6c0-.551.448-1 1-1h14c.552 0 1 .449 1 1v8zM19 3H5C3.346 3 2 4.346 2 6v8c0 1.654 1.346 3 3 3h6v2H7c-.55 0-1 .45-1 1s.45 1 1 1h10c.55 0 1-.45 1-1s-.45-1-1-1h-4v-2h6c1.654 0 3-1.346 3-3V6c0-1.654-1.346-3-3-3z"
          fill="#fff"
        />
      </mask>
    </svg>
  );
};

export const GoogleIcon = (props) => {
  let { width = 24, height = 24 } = props;
  return (
    <svg
      {...props}
      width={width}
      height={height}
      viewBox="0 0 42 42"
      fill="none"
    >
      <g>
        <path
          fill="#4285F4"
          d="M19.497 10.173c0-.705-.063-1.383-.181-2.034H9.947v3.848h5.354c-.23 1.243-.932 2.297-1.985 3.002v2.496h3.215c1.88-1.732 2.966-4.282 2.966-7.312z"
          transform="translate(11.053 11.053)"
        ></path>
        <path
          fill="#34A853"
          d="M9.947 19.895c2.686 0 4.938-.891 6.584-2.41l-3.215-2.496c-.89.597-2.03.95-3.369.95-2.59 0-4.783-1.75-5.566-4.102H1.058v2.578c1.637 3.25 5 5.48 8.89 5.48z"
          transform="translate(11.053 11.053)"
        ></path>
        <path
          fill="#FBBC05"
          d="M4.381 11.837c-.199-.596-.312-1.234-.312-1.89 0-.655.113-1.293.312-1.89V5.48H1.058C.384 6.823 0 8.342 0 9.947c0 1.606.384 3.125 1.058 4.468l3.323-2.578z"
          transform="translate(11.053 11.053)"
        ></path>
        <path
          fill="#EA4335"
          d="M9.947 3.956c1.46 0 2.772.502 3.803 1.488l2.853-2.853C14.88.986 12.63 0 9.947 0 6.06 0 2.695 2.23 1.058 5.48l3.323 2.577c.783-2.35 2.976-4.1 5.566-4.1z"
          transform="translate(11.053 11.053)"
        ></path>
      </g>
    </svg>
  );
};

export const ChevronDownIcon = (props) => {
  let { width, height, color } = props;
  return (
    <svg
      {...props}
      width={width || 24}
      height={height || 24}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g>
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M12 15.5C11.744 15.5 11.488 15.402 11.293 15.207L7.29301 11.207C6.90201 10.816 6.90201 10.184 7.29301 9.79301C7.68401 9.40201 8.31601 9.40201 8.70701 9.79301L12.012 13.098L15.305 9.91801C15.704 9.53501 16.335 9.54601 16.719 9.94301C17.103 10.34 17.092 10.974 16.695 11.357L12.695 15.219C12.5 15.407 12.25 15.5 12 15.5Z"
          fill={color || "#8676FF"}
        />
        <mask x="6" y="9" width="11" height="7">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12 15.5C11.744 15.5 11.488 15.402 11.293 15.207L7.29301 11.207C6.90201 10.816 6.90201 10.184 7.29301 9.79301C7.68401 9.40201 8.31601 9.40201 8.70701 9.79301L12.012 13.098L15.305 9.91801C15.704 9.53501 16.335 9.54601 16.719 9.94301C17.103 10.34 17.092 10.974 16.695 11.357L12.695 15.219C12.5 15.407 12.25 15.5 12 15.5Z"
            fill="white"
          />
        </mask>
      </g>
    </svg>
  );
};

export const SourceToDestination = (props) => {
  let { width, height } = props;
  return (
    <svg
      width={width || 544}
      height={height || 215}
      viewBox="0 0 544 215"
      fill="none"
      {...props}
    >
      <g filter="url(#prefix__filter0_dddddd)">
        <path
          d="M50 5a5 5 0 015-5h133.431a18 18 0 017.41 1.596l35.331 15.96a5.001 5.001 0 002.059.444h80.905c.982 0 1.941-.289 2.76-.83L341.583.83a4.998 4.998 0 012.759-.83H489a5 5 0 015 5v92a5 5 0 01-5 5H344.162a4.996 4.996 0 01-2.475-.656l-24.895-14.188a5 5 0 00-2.476-.656H233.534a5 5 0 00-2.565.708l-23.562 14.084a5.003 5.003 0 01-2.565.708H55a5 5 0 01-5-5V5z"
          fill="#fff"
        />
        <path
          d="M50.312 5A4.688 4.688 0 0155 .312h133.431c2.511 0 4.993.534 7.282 1.568l35.331 15.96c.687.311 1.433.472 2.187.472h80.905a5.314 5.314 0 002.932-.883L341.755 1.09a4.686 4.686 0 012.587-.778H489A4.688 4.688 0 01493.688 5v92a4.688 4.688 0 01-4.688 4.688H344.162a4.687 4.687 0 01-2.321-.615l-24.895-14.188a5.309 5.309 0 00-2.63-.697H233.534c-.959 0-1.901.26-2.725.753l-23.562 14.083a4.683 4.683 0 01-2.405.664H55A4.688 4.688 0 0150.312 97V5z"
          stroke="#BAB1FF"
          strokeWidth={0.624}
        />
      </g>
      <defs>
        <filter
          id="prefix__filter0_dddddd"
          x={0.119}
          y={0}
          width={543.762}
          height={214.232}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy={1.725} />
          <feGaussianBlur stdDeviation={0.69} />
          <feColorMatrix values="0 0 0 0 0.423529 0 0 0 0 0.286275 0 0 0 0 0.67451 0 0 0 0.0196802 0" />
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy={4.146} />
          <feGaussianBlur stdDeviation={1.659} />
          <feColorMatrix values="0 0 0 0 0.423529 0 0 0 0 0.286275 0 0 0 0 0.67451 0 0 0 0.0282725 0" />
          <feBlend in2="effect1_dropShadow" result="effect2_dropShadow" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy={7.807} />
          <feGaussianBlur stdDeviation={3.123} />
          <feColorMatrix values="0 0 0 0 0.423529 0 0 0 0 0.286275 0 0 0 0 0.67451 0 0 0 0.035 0" />
          <feBlend in2="effect2_dropShadow" result="effect3_dropShadow" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy={13.927} />
          <feGaussianBlur stdDeviation={5.571} />
          <feColorMatrix values="0 0 0 0 0.423529 0 0 0 0 0.286275 0 0 0 0 0.67451 0 0 0 0.0417275 0" />
          <feBlend in2="effect3_dropShadow" result="effect4_dropShadow" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy={26.049} />
          <feGaussianBlur stdDeviation={10.419} />
          <feColorMatrix values="0 0 0 0 0.423529 0 0 0 0 0.286275 0 0 0 0 0.67451 0 0 0 0.0503198 0" />
          <feBlend in2="effect4_dropShadow" result="effect5_dropShadow" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy={62.351} />
          <feGaussianBlur stdDeviation={24.94} />
          <feColorMatrix values="0 0 0 0 0.423529 0 0 0 0 0.286275 0 0 0 0 0.67451 0 0 0 0.07 0" />
          <feBlend in2="effect5_dropShadow" result="effect6_dropShadow" />
          <feBlend in="SourceGraphic" in2="effect6_dropShadow" result="shape" />
        </filter>
      </defs>
    </svg>
  );
};

export const MoreIcon = (props) => {
  let { width, height } = props;
  return (
    <svg
      width={27 || width}
      height={26 || height}
      viewBox="0 0 27 26"
      fill="none"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.5 7.583c1.242 0 2.25-.97 2.25-2.166S14.742 3.25 13.5 3.25s-2.25.97-2.25 2.167c0 1.196 1.008 2.166 2.25 2.166zm0 3.25c-1.242 0-2.25.971-2.25 2.167 0 1.196 1.008 2.167 2.25 2.167s2.25-.971 2.25-2.167c0-1.196-1.008-2.167-2.25-2.167zm-2.25 9.75c0-1.196 1.008-2.166 2.25-2.166s2.25.97 2.25 2.166-1.008 2.167-2.25 2.167-2.25-.97-2.25-2.167z"
        fill="#373737"
      />
      <mask
        id="prefix__a"
        maskUnits="userSpaceOnUse"
        x={11}
        y={3}
        width={5}
        height={20}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.5 7.583c1.242 0 2.25-.97 2.25-2.166S14.742 3.25 13.5 3.25s-2.25.97-2.25 2.167c0 1.196 1.008 2.166 2.25 2.166zm0 3.25c-1.242 0-2.25.971-2.25 2.167 0 1.196 1.008 2.167 2.25 2.167s2.25-.971 2.25-2.167c0-1.196-1.008-2.167-2.25-2.167zm-2.25 9.75c0-1.196 1.008-2.166 2.25-2.166s2.25.97 2.25 2.166-1.008 2.167-2.25 2.167-2.25-.97-2.25-2.167z"
          fill="#fff"
        />
      </mask>
    </svg>
  );
};

export const RightCircleButton = (props) => {
  let { height, width, active } = props;
  return (
    <svg
      width={46 || width}
      height={44 || height}
      viewBox="0 0 46 44"
      fill="none"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.333 22.666h7.91l-2.422 2.907a.666.666 0 101.024.853l3.334-4c.026-.031.038-.068.058-.102.016-.028.035-.052.047-.083a.657.657 0 00.048-.239V22v-.003a.657.657 0 00-.048-.239c-.012-.03-.031-.054-.047-.082-.02-.035-.032-.072-.058-.103l-3.334-4a.668.668 0 00-.939-.085.666.666 0 00-.085.938l2.422 2.907h-7.91a.667.667 0 000 1.333z"
        fill={active ? "#282B39" : "#D8DCE8"}
      />
      <mask
        id="prefix__a"
        maskUnits="userSpaceOnUse"
        x={17}
        y={17}
        width={12}
        height={10}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M18.333 22.666h7.91l-2.422 2.907a.666.666 0 101.024.853l3.334-4c.026-.031.038-.068.058-.102.016-.028.035-.052.047-.083a.657.657 0 00.048-.239V22v-.003a.657.657 0 00-.048-.239c-.012-.03-.031-.054-.047-.082-.02-.035-.032-.072-.058-.103l-3.334-4a.668.668 0 00-.939-.085.666.666 0 00-.085.938l2.422 2.907h-7.91a.667.667 0 000 1.333z"
          fill="#fff"
        />
      </mask>
      <rect
        x={1}
        y={1}
        width={44}
        height={42}
        rx={21}
        stroke={active ? "#2B6BEA" : "#D8DCE8"}
        strokeWidth={2}
      />
    </svg>
  );
};

export const LeftCircleButton = (props) => {
  let { height, width, active } = props;
  return (
    <svg
      width={46 || width}
      height={44 || height}
      viewBox="0 0 46 44"
      fill="none"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M27.667 22.667h-7.91l2.422 2.906a.666.666 0 11-1.024.854l-3.334-4c-.026-.032-.038-.068-.058-.103-.016-.028-.035-.052-.047-.083a.657.657 0 01-.048-.238V22v-.003c0-.08.018-.162.048-.238.012-.03.031-.055.047-.083.02-.034.032-.071.058-.102l3.334-4a.668.668 0 01.939-.086.666.666 0 01.085.939l-2.422 2.907h7.91a.667.667 0 010 1.333z"
        fill={active ? "#282B39" : "#D8DCE8"}
      />
      <mask
        id="prefix__a"
        maskUnits="userSpaceOnUse"
        x={17}
        y={17}
        width={12}
        height={10}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M27.667 22.667h-7.91l2.422 2.906a.666.666 0 11-1.024.854l-3.334-4c-.026-.032-.038-.068-.058-.103-.016-.028-.035-.052-.047-.083a.657.657 0 01-.048-.238V22v-.003c0-.08.018-.162.048-.238.012-.03.031-.055.047-.083.02-.034.032-.071.058-.102l3.334-4a.668.668 0 01.939-.086.666.666 0 01.085.939l-2.422 2.907h7.91a.667.667 0 010 1.333z"
          fill="#fff"
        />
      </mask>
      <rect
        x={1}
        y={1}
        width={44}
        height={42}
        rx={21}
        stroke={active ? "#2B6BEA" : "#D8DCE8"}
        strokeWidth={2}
      />
    </svg>
  );
};

export const EditIcon = (props) => {
  const { height, width } = props;
  return (
    <svg
      width={width || 20}
      height={height || 21}
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.7025 16.3333H17.5V17.9999H2.5V14.4641L10.75 6.21411L14.285 9.75078L7.70167 16.3333H7.7025ZM11.9275 5.03661L13.6958 3.26828C13.8521 3.11205 14.064 3.02429 14.285 3.02429C14.506 3.02429 14.7179 3.11205 14.8742 3.26828L17.2317 5.62578C17.3879 5.78205 17.4757 5.99398 17.4757 6.21495C17.4757 6.43592 17.3879 6.64784 17.2317 6.80411L15.4633 8.57161L11.9283 5.03661H11.9275Z"
        fill="#172B4D"
      />
    </svg>
  );
};
export const RightChevronIcon = (props) => {
  const { height, width } = props;
  return (
    <svg
      width={width || 25}
      height={height || 25}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 19a1 1 0 01-.768-1.64l4.476-5.371-4.316-5.362a1 1 0 011.56-1.254l4.828 6a1 1 0 01-.011 1.267l-5 6a1 1 0 01-.77.36z"
        fill={"#373737"}
      />
      <mask
        id="prefix__a"
        maskUnits="userSpaceOnUse"
        x={9}
        y={5}
        width={8}
        height={14}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10 19a1 1 0 01-.768-1.64l4.476-5.371-4.316-5.362a1 1 0 011.56-1.254l4.828 6a1 1 0 01-.011 1.267l-5 6a1 1 0 01-.77.36z"
          fill="#fff"
        />
      </mask>
    </svg>
  );
};

export const BlitzzIcon = (props) => {
  const { height, width } = props;
  return (
    <svg
      width={width || 93}
      height={height || 130}
      viewBox="0 0 93 130"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M0 81.714h36.391V130L93 46.704H56.609V0L0 81.714z"
        fill="#4D9DF4"
      />
    </svg>
  );
};

export const SnapshotModeIcon = (props) => {
  const { height, width } = props;
  return (
    <svg
      width={height || 34}
      height={width || 27}
      viewBox="0 0 34 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M27.833 15.833v9.4a1.397 1.397 0 01-1.383 1.434H1.717a1.401 1.401 0 01-1.384-1.434V8.1a1.4 1.4 0 011.384-1.433h1.95V5H7v1.667h11.667v1.666H2V25h24.167v-9.167h1.666zM24.7 4.033L22.867 2.2 21.7 3.383 23.533 5.2c.302-.468.7-.865 1.167-1.167zm2.3-.7c.277-.025.556-.025.833 0v-2.5h-1.666v2.584A4.55 4.55 0 0127 3.333zM30.467 5.2L32.3 3.333 31.133 2.15 29.3 3.983c.473.316.871.731 1.167 1.217zM29.3 10.967l1.833 1.833 1.167-1.183L30.467 9.8c-.302.468-.7.865-1.167 1.167zm-2.3.7a4.544 4.544 0 01-.833-.084v2.584h1.666v-2.5a4.548 4.548 0 01-.833 0zm4.083-5c.112.55.112 1.116 0 1.666h2.584V6.667h-2.584zm-8.25.833c.002-.28.03-.559.084-.833h-2.584v1.666h2.584a4.545 4.545 0 01-.084-.833zm.7 2.3L21.7 11.667l1.167 1.183 1.833-1.833A3.901 3.901 0 0123.533 9.8zM27 6.667a.834.834 0 100 1.667.834.834 0 000-1.667zM27 5a2.5 2.5 0 110 5 2.5 2.5 0 010-5zm-12.5 6.667a5 5 0 100 10 5 5 0 000-10zm0-1.667a6.667 6.667 0 110 13.334A6.667 6.667 0 0114.5 10zm0 3.333a3.333 3.333 0 100 6.667 3.333 3.333 0 000-6.667z"
        fill="#2B6BEA"
      />
    </svg>
  );
};

export const FullModeIcon = (props) => {
  const { height, width } = props;
  return (
    <svg
      width={width || 45}
      height={height || 45}
      viewBox="0 0 45 45"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M17.64 24.696a3.008 3.008 0 01-3.004-3.005 3.008 3.008 0 013.005-3.004 3.008 3.008 0 013.004 3.004 3.008 3.008 0 01-3.004 3.005zm0-4.427c-.784 0-1.422.638-1.422 1.422 0 .785.638 1.423 1.423 1.423.784 0 1.422-.638 1.422-1.423 0-.784-.638-1.422-1.422-1.422z"
        fill="#fff"
      />
      <path
        d="M5.913 32.848h1.61v3.884h7.08v-3.884h15.766v3.884h7.08v-3.884h1.638V15.703h-5.715a6.939 6.939 0 00-4.41-1.576 6.938 6.938 0 00-4.409 1.576H5.913v17.145zm7.01 2.205H9.202v-2.205h3.723v2.205zm22.847 0h-3.723v-2.205h3.723v2.205zm-6.808-19.248a5.3 5.3 0 015.294 5.294 5.3 5.3 0 01-5.294 5.294 5.3 5.3 0 01-5.293-5.294 5.3 5.3 0 015.293-5.294zm-5.893 1.576A6.929 6.929 0 0021.99 21.1a6.98 6.98 0 006.972 6.973 6.98 6.98 0 006.973-6.973c0-1.366-.397-2.64-1.079-3.718h2.552v13.784h-7.04v.005H14.603v-.005h-7.01V17.38h15.477zM33.363 13.65l2.627-2.627-1.187-1.187-2.627 2.627 1.187 1.187zM29.996 8.268h-1.679v3.716h1.679V8.268zM24.927 13.65l1.187-1.187-2.628-2.628-1.187 1.187 2.628 2.628z"
        fill="#2B6BEA"
      />
      <path
        d="M28.964 24.796a3.701 3.701 0 01-3.697-3.697 3.701 3.701 0 013.697-3.697 3.701 3.701 0 013.697 3.697 3.701 3.701 0 01-3.697 3.697z"
        fill="#2B6BEA"
      />
    </svg>
  );
};

export const RectangleSolidIcon = (props) => {
  const { height, width } = props;
  return (
    <svg
      width={width || 14}
      height={height || 14}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path fill="#fff" stroke="#2B6BEA" strokeWidth={2} d="M13 13H1V1h12z" />
    </svg>
  );
};

export const RectangleDottedIcon = (props) => {
  const { height, width } = props;
  return (
    <svg
      width={width || 14}
      height={height || 14}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fill="#fff"
        stroke="#2B6BEA"
        strokeWidth={2}
        strokeDasharray="2 2"
        d="M13 13H1V1h12z"
      />
    </svg>
  );
};

export const PlusIcon = (props) => {
  const { height, width, role } = props;
  return (
    <svg
      width={width || 9}
      height={height || 9}
      viewBox="0 0 9 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M.528 3.72h3.024V.616h2.112V3.72h3.024v1.952H5.664v3.104H3.552V5.672H.528V3.72z"
        fill={role ? mapRoleToBackgroundColor(role) : "#2B6BEA"}
      />
    </svg>
  );
};

export const CurrentLocationIcon = (props) => {
  const { height, width, role } = props;

  return (
    <svg
      width={width || 20}
      height={height || 20}
      viewBox="0 0 20 20"
      fill="none"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M-.001 8l20-8-10 20V10l-10-2z"
        fill={mapRoleToTextColor(role || "success")}
      />
    </svg>
  );
};
export const ForwardSlashIcon = (props) => {
  const { height, width } = props;
  return (
    <svg
      width={width || 7}
      height={height || 12}
      viewBox="0 0 7 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M5.91.414l-5 11" stroke="#2B6BEA" strokeWidth={2} />
    </svg>
  );
};

export const SearchIcon = (props) => {
  const { height, width } = props;
  return (
    <svg
      width={width || 24}
      height={height || 24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 11c0-3.309 2.691-6 6-6s6 2.691 6 6-2.691 6-6 6-6-2.691-6-6zm15.707 8.293l-3.395-3.396A7.952 7.952 0 0019 11c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8a7.952 7.952 0 004.897-1.688l3.396 3.395a.997.997 0 001.414 0 .999.999 0 000-1.414z"
        fill="#282B39"
      />
      <mask
        id="prefix__a"
        maskUnits="userSpaceOnUse"
        x={3}
        y={3}
        width={19}
        height={18}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5 11c0-3.309 2.691-6 6-6s6 2.691 6 6-2.691 6-6 6-6-2.691-6-6zm15.707 8.293l-3.395-3.396A7.952 7.952 0 0019 11c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8a7.952 7.952 0 004.897-1.688l3.396 3.395a.997.997 0 001.414 0 .999.999 0 000-1.414z"
          fill="#fff"
        />
      </mask>
    </svg>
  );
};

export const BackArrowIcon = (props) => {
  const { height, width } = props;
  return (
    <svg
      width={width || 24}
      height={height || 24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.362 17a.996.996 0 01-.719-.305l-3.863-4a1 1 0 01.013-1.402l4-4a.999.999 0 111.414 1.414l-3.305 3.305 3.18 3.293a1 1 0 01-.72 1.695z"
        fill="#BAB1FF"
      />
      <mask
        id="prefix__a"
        maskUnits="userSpaceOnUse"
        x={8}
        y={6}
        width={7}
        height={11}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.362 17a.996.996 0 01-.719-.305l-3.863-4a1 1 0 01.013-1.402l4-4a.999.999 0 111.414 1.414l-3.305 3.305 3.18 3.293a1 1 0 01-.72 1.695z"
          fill="#fff"
        />
      </mask>
    </svg>
  );
};

export const ChevronRightIcon = (props) => {
  const { height, width, color } = props;
  return (
    <svg
      width={width || 24}
      height={height || 24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.5 17a.999.999 0 01-.707-1.707l3.305-3.305-3.18-3.293a1 1 0 011.439-1.39l3.862 4a1 1 0 01-.012 1.402l-4 4A.997.997 0 0110.5 17z"
        fill={color || "#BAB1FF"}
      />
      <mask
        id="prefix__a"
        maskUnits="userSpaceOnUse"
        x={9}
        y={7}
        width={7}
        height={10}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.5 17a.999.999 0 01-.707-1.707l3.305-3.305-3.18-3.293a1 1 0 011.439-1.39l3.862 4a1 1 0 01-.012 1.402l-4 4A.997.997 0 0110.5 17z"
          fill="#fff"
        />
      </mask>
    </svg>
  );
};

export const QuestionMarkCircleIcon = (props) => {
  const { height, width } = props;
  return (
    <svg
      width={width || 24}
      height={height || 24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.5 9.5C8.5 7.57 10.07 6 12 6s3.5 1.57 3.5 3.5c0 1.58-1.06 2.903-2.5 3.337V14a1 1 0 11-2 0v-2a1 1 0 011-1c.827 0 1.5-.673 1.5-1.5S12.827 8 12 8s-1.5.673-1.5 1.5a1 1 0 11-2 0zM11 17a1 1 0 112 0 1 1 0 11-2 0zm1 3c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm0-18C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2z"
        fill="#9EA7BC"
      />
      <mask
        id="prefix__a"
        maskUnits="userSpaceOnUse"
        x={2}
        y={2}
        width={20}
        height={20}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.5 9.5C8.5 7.57 10.07 6 12 6s3.5 1.57 3.5 3.5c0 1.58-1.06 2.903-2.5 3.337V14a1 1 0 11-2 0v-2a1 1 0 011-1c.827 0 1.5-.673 1.5-1.5S12.827 8 12 8s-1.5.673-1.5 1.5a1 1 0 11-2 0zM11 17a1 1 0 112 0 1 1 0 11-2 0zm1 3c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm0-18C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2z"
          fill="#fff"
        />
      </mask>
    </svg>
  );
};

export const UserProfileIcon = (props) => {
  const { height, width } = props;
  return (
    <svg
      width={width || 24}
      height={height || 24}
      viewBox="0 0 14 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14 17a1 1 0 11-2 0c0-2.757-2.243-5-5-5s-5 2.243-5 5a1 1 0 11-2 0c0-3.86 3.141-7 7-7s7 3.14 7 7zM7 2c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2zm0 6c2.206 0 4-1.794 4-4S9.206 0 7 0 3 1.794 3 4s1.794 4 4 4z"
        fill="#9EA7BC"
      />
    </svg>
  );
};

export const EyeIcon = (props) => {
  const { height, width } = props;
  return (
    <svg
      width={width || 22}
      height={height || 22}
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.08258 11C1.94425 6.30667 6.05733 2.75 11 2.75C15.9427 2.75 20.0548 6.30667 20.9174 11C20.0557 15.6933 15.9427 19.25 11 19.25C6.05733 19.25 1.94516 15.6933 1.08258 11ZM11 15.5833C12.2156 15.5833 13.3814 15.1004 14.2409 14.2409C15.1004 13.3814 15.5833 12.2156 15.5833 11C15.5833 9.78442 15.1004 8.61864 14.2409 7.75909C13.3814 6.89955 12.2156 6.41667 11 6.41667C9.78442 6.41667 8.61863 6.89955 7.75909 7.75909C6.89955 8.61864 6.41666 9.78442 6.41666 11C6.41666 12.2156 6.89955 13.3814 7.75909 14.2409C8.61863 15.1004 9.78442 15.5833 11 15.5833ZM11 13.75C10.2707 13.75 9.57118 13.4603 9.05545 12.9445C8.53973 12.4288 8.25 11.7293 8.25 11C8.25 10.2707 8.53973 9.57118 9.05545 9.05546C9.57118 8.53973 10.2707 8.25 11 8.25C11.7293 8.25 12.4288 8.53973 12.9445 9.05546C13.4603 9.57118 13.75 10.2707 13.75 11C13.75 11.7293 13.4603 12.4288 12.9445 12.9445C12.4288 13.4603 11.7293 13.75 11 13.75Z"
        fill="#8F9CB3"
      />
    </svg>
  );
};
export const PlayCircle = (props) => {
  const { height, width } = props;
  return (
    <svg
      width={width || 31}
      height={height || 31}
      viewBox="0 0 31 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.4998 30.0833C7.44546 30.0833 0.916504 23.5543 0.916504 15.5C0.916504 7.44559 7.44546 0.916626 15.4998 0.916626C23.5542 0.916626 30.0832 7.44559 30.0832 15.5C30.0832 23.5543 23.5542 30.0833 15.4998 30.0833ZM15.4998 27.1666C18.594 27.1666 21.5615 25.9375 23.7494 23.7495C25.9373 21.5616 27.1665 18.5942 27.1665 15.5C27.1665 12.4058 25.9373 9.43831 23.7494 7.25038C21.5615 5.06246 18.594 3.83329 15.4998 3.83329C12.4056 3.83329 9.43818 5.06246 7.25026 7.25038C5.06233 9.43831 3.83317 12.4058 3.83317 15.5C3.83317 18.5942 5.06233 21.5616 7.25026 23.7495C9.43818 25.9375 12.4056 27.1666 15.4998 27.1666ZM13.4903 10.2718L20.6055 15.0143C20.6855 15.0676 20.7511 15.1398 20.7965 15.2245C20.8419 15.3092 20.8656 15.4038 20.8656 15.5C20.8656 15.5961 20.8419 15.6907 20.7965 15.7754C20.7511 15.8601 20.6855 15.9323 20.6055 15.9856L13.4888 20.7281C13.401 20.7863 13.2992 20.8196 13.194 20.8246C13.0889 20.8295 12.9843 20.8059 12.8915 20.7563C12.7986 20.7067 12.721 20.6328 12.6667 20.5426C12.6124 20.4524 12.5835 20.3492 12.5832 20.2439V10.756C12.5834 10.6505 12.6122 10.547 12.6665 10.4566C12.7209 10.3661 12.7987 10.2921 12.8918 10.2425C12.9849 10.1928 13.0897 10.1693 13.1951 10.1744C13.3005 10.1796 13.4025 10.2133 13.4903 10.2718Z"
        fill="#00DCF0"
      />
    </svg>
  );
};
export const LeftWhiteChevronIcon = (props) => {
  const { height, width } = props;
  return (
    <svg
      width={height || "22"}
      height={width || "32"}
      viewBox="0 0 22 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.355 16L21.9637 26.605L16.6612 31.9112L0.75 16L16.6612 0.0887451L21.9637 5.395L11.355 16Z"
        fill="#F7FBFF"
      />
    </svg>
  );
};
export const RightWhiteChevronIcon = (props) => {
  const { height, width } = props;
  return (
    <svg
      width={height || "22"}
      height={width || "32"}
      viewBox="0 0 22 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.645 16L0.0362549 5.395L5.33875 0.0887451L21.25 16L5.33875 31.9112L0.0362549 26.605L10.645 16Z"
        fill="#F7FBFF"
      />
    </svg>
  );
};
export const InfoIcon = (props) => {
  const { height, width } = props;
  return (
    <svg
      width={width || 32}
      height={height || 32}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="16" cy="16" r="16" fill="#E6EBF2" />
      <path
        d="M16 26C10.477 26 6 21.523 6 16C6 10.477 10.477 6 16 6C21.523 6 26 10.477 26 16C26 21.523 21.523 26 16 26ZM16 24C18.1217 24 20.1566 23.1571 21.6569 21.6569C23.1571 20.1566 24 18.1217 24 16C24 13.8783 23.1571 11.8434 21.6569 10.3431C20.1566 8.84285 18.1217 8 16 8C13.8783 8 11.8434 8.84285 10.3431 10.3431C8.84285 11.8434 8 13.8783 8 16C8 18.1217 8.84285 20.1566 10.3431 21.6569C11.8434 23.1571 13.8783 24 16 24ZM15 11H17V13H15V11ZM15 15H17V21H15V15Z"
        fill="#172B4D"
      />
    </svg>
  );
};
export const WarningIcon = (props) => {
  const { height, width } = props;
  return (
    <svg
      width={width || 32}
      height={height || 32}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="16" cy="16" r="16" fill="#FEEA8A" />
      <path
        d="M21.5 6.5L27 16L21.5 25.5H10.5L5 16L10.5 6.5H21.5ZM20.347 8.5H11.653L7.311 16L11.653 23.5H20.347L24.689 16L20.347 8.5ZM15 19H17V21H15V19ZM15 11H17V17H15V11Z"
        fill="#9C6F19"
      />
    </svg>
  );
};
export const CriticalIcon = (props) => {
  const { height, width } = props;
  return (
    <svg
      width={width || 32}
      height={height || 32}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="16" cy="16" r="16" fill="#FEAE9A" />
      <path
        d="M16.8661 6.99996L26.3921 23.5C26.4799 23.652 26.5261 23.8244 26.5261 24C26.5261 24.1755 26.4799 24.3479 26.3921 24.4999C26.3043 24.652 26.1781 24.7782 26.0261 24.866C25.8741 24.9537 25.7016 25 25.5261 25H6.4741C6.29856 25 6.12612 24.9537 5.9741 24.866C5.82209 24.7782 5.69585 24.652 5.60809 24.4999C5.52032 24.3479 5.47412 24.1755 5.47412 24C5.47412 23.8244 5.52033 23.652 5.6081 23.5L15.1341 6.99996C15.2219 6.84795 15.3481 6.72172 15.5001 6.63396C15.6521 6.5462 15.8246 6.5 16.0001 6.5C16.1756 6.5 16.3481 6.5462 16.5001 6.63396C16.6521 6.72172 16.7783 6.84795 16.8661 6.99996ZM8.2061 23H23.7941L16.0001 9.49996L8.2061 23ZM15.0001 20H17.0001V22H15.0001V20ZM15.0001 13H17.0001V18H15.0001V13Z"
        fill="#BF0A12"
      />
    </svg>
  );
};
export const SuccessIcon = (props) => {
  const { height, width } = props;
  return (
    <svg
      width={width || 32}
      height={height || 32}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="16" cy="16" r="16" fill="#BAE5B3" />
      <path
        d="M16 26C10.477 26 6 21.523 6 16C6 10.477 10.477 6 16 6C21.523 6 26 10.477 26 16C26 21.523 21.523 26 16 26ZM16 24C18.1217 24 20.1566 23.1571 21.6569 21.6569C23.1571 20.1566 24 18.1217 24 16C24 13.8783 23.1571 11.8434 21.6569 10.3431C20.1566 8.84285 18.1217 8 16 8C13.8783 8 11.8434 8.84285 10.3431 10.3431C8.84285 11.8434 8 13.8783 8 16C8 18.1217 8.84285 20.1566 10.3431 21.6569C11.8434 23.1571 13.8783 24 16 24ZM15.003 20L10.76 15.757L12.174 14.343L15.003 17.172L20.659 11.515L22.074 12.929L15.003 20Z"
        fill="#0F8043"
      />
    </svg>
  );
};

export const BrandIcon = (props) => {
  const { height, width } = props;
  return (
    <svg
      width={width || 111}
      height={height || 149}
      viewBox="0 0 111 149"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M107.836 43.576C108.242 44.19 108.419 44.7994 108.367 45.4043C108.331 46.009 108.058 46.5723 107.548 47.0944C106.893 47.7657 106.138 48.0403 105.282 47.9182C104.44 47.7959 103.534 47.2618 102.565 46.3158L98.9624 42.8012L106.603 34.9699L109.982 38.2662C110.854 39.1176 111.358 39.9514 111.494 40.7677C111.636 41.5912 111.395 42.3237 110.769 42.9651C110.347 43.3977 109.879 43.6614 109.364 43.7561C108.864 43.8507 108.355 43.7907 107.836 43.576ZM106.765 36.46L103.993 39.3017L106.487 41.7357C107.121 42.3543 107.726 42.7116 108.302 42.8076C108.886 42.8962 109.403 42.7093 109.854 42.2469C110.305 41.7845 110.475 41.2666 110.365 40.6932C110.262 40.1123 109.894 39.5126 109.26 38.8941L106.765 36.46ZM103.219 45.6225C103.921 46.3065 104.567 46.7038 105.157 46.8144C105.748 46.925 106.291 46.7268 106.786 46.2196C107.739 45.2425 107.507 44.0627 106.09 42.6801L103.327 39.9841L100.456 42.9264L103.219 45.6225Z"
        fill="#00DCF0"
      />
      <path
        d="M112.475 59.4356L111.588 59.8991L108.004 53.0428L117.699 47.9733L121.176 54.6219L120.289 55.0854L117.349 49.4618L113.9 51.2651L116.522 56.2792L115.649 56.7355L113.027 51.7213L109.426 53.6043L112.475 59.4356Z"
        fill="#00DCF0"
      />
      <path
        d="M112.227 85.4368C112.559 84.4051 113.088 83.5409 113.815 82.8443C114.549 82.1608 115.395 81.7101 116.351 81.4921C117.305 81.2841 118.282 81.3411 119.284 81.6631C120.286 81.985 121.114 82.5083 121.768 83.2328C122.418 83.9672 122.838 84.8243 123.026 85.8043C123.222 86.7974 123.154 87.8098 122.822 88.8415C122.491 89.8732 121.964 90.7275 121.243 91.4042C120.519 92.0909 119.674 92.5416 118.707 92.7564C117.751 92.9744 116.772 92.9224 115.77 92.6004C114.768 92.2784 113.936 91.7486 113.276 91.011C112.625 90.2766 112.206 89.4194 112.017 88.4395C111.826 87.4694 111.895 86.4685 112.227 85.4368ZM113.209 85.7524C112.945 86.5758 112.889 87.3788 113.042 88.1615C113.206 88.9473 113.554 89.6339 114.088 90.2212C114.631 90.8118 115.31 91.2378 116.123 91.4992C116.937 91.7606 117.732 91.808 118.508 91.6415C119.293 91.4781 119.977 91.123 120.557 90.5763C121.148 90.0328 121.575 89.3493 121.84 88.5259C122.105 87.7025 122.157 86.8929 121.997 86.0972C121.843 85.3146 121.496 84.623 120.956 84.0225C120.422 83.4352 119.749 83.0108 118.935 82.7493C118.122 82.4879 117.322 82.4389 116.536 82.6023C115.757 82.7788 115.072 83.1388 114.482 83.6824C113.898 84.239 113.474 84.929 113.209 85.7524Z"
        fill="#00DCF0"
      />
      <path
        d="M116.333 100.4L112.68 98.1356L109.699 102.945L108.849 102.418L111.83 97.6086L107.884 95.1631L108.493 94.18L117.793 99.9437L113.841 106.321L112.99 105.794L116.333 100.4Z"
        fill="#00DCF0"
      />
      <path
        d="M104.933 114.384L98.1187 105.824L98.9992 105.123L105.19 112.9L107.208 111.294L107.831 112.077L104.933 114.384Z"
        fill="#00DCF0"
      />
      <path
        d="M90.6078 110.152C91.3775 109.805 92.1583 109.7 92.9504 109.834C93.7329 109.974 94.4662 110.346 95.1504 110.953C95.8293 111.573 96.4018 112.401 96.8679 113.436C97.334 114.472 97.5718 115.445 97.5812 116.355C97.5855 117.278 97.3803 118.079 96.9655 118.757C96.5412 119.439 95.9442 119.954 95.1745 120.3C94.4048 120.646 93.6287 120.75 92.8462 120.611C92.0542 120.476 91.314 120.1 90.6255 119.485C89.9414 118.878 89.3662 118.057 88.9002 117.022C88.4341 115.986 88.1989 115.006 88.1946 114.083C88.1947 113.169 88.4068 112.37 88.8311 111.688C89.2459 111.01 89.8381 110.498 90.6078 110.152ZM91.0311 111.092C90.4515 111.353 90.0158 111.743 89.7241 112.263C89.4228 112.787 89.2877 113.414 89.3185 114.143C89.3494 114.871 89.5615 115.673 89.9549 116.547C90.3483 117.421 90.8075 118.112 91.3325 118.618C91.8575 119.125 92.416 119.439 93.008 119.561C93.5905 119.687 94.1715 119.62 94.7512 119.359C95.3308 119.099 95.7713 118.706 96.0725 118.182C96.3642 117.662 96.4947 117.038 96.4638 116.309C96.4329 115.58 96.2208 114.779 95.8274 113.905C95.434 113.03 94.9748 112.34 94.4498 111.834C93.9248 111.327 93.3711 111.011 92.7886 110.884C92.1966 110.762 91.6108 110.831 91.0311 111.092Z"
        fill="#00DCF0"
      />
      <path
        d="M79.3903 118.626L81.3709 116.135L81.0641 113.275L82.2141 113.152L83.3813 124.03L82.2313 124.154L81.526 117.58L75.8439 124.839L74.5229 124.981L78.7033 119.549L73.0294 114.137L74.397 113.99L79.3903 118.626Z"
        fill="#00DCF0"
      />
      <path
        d="M40.5497 103.668C40.1715 103.037 40.0214 102.421 40.0993 101.818C40.1625 101.216 40.46 100.665 40.9917 100.166C41.6754 99.5239 42.4423 99.2826 43.2924 99.4421C44.1278 99.6011 45.0091 100.174 45.9363 101.162L49.3814 104.831L41.4053 112.32L38.1742 108.879C37.3397 107.99 36.8727 107.135 36.7732 106.314C36.6666 105.485 36.9399 104.764 37.5932 104.15C38.0338 103.736 38.5133 103.494 39.0316 103.421C39.5351 103.349 40.0412 103.431 40.5497 103.668ZM41.3086 110.824L44.2028 108.107L41.8169 105.566C41.2107 104.92 40.6219 104.537 40.0507 104.416C39.472 104.301 38.9471 104.466 38.4761 104.908C38.0051 105.35 37.8122 105.86 37.8972 106.438C37.9746 107.022 38.3165 107.638 38.9227 108.283L41.3086 110.824ZM45.252 101.826C44.5815 101.112 43.9535 100.687 43.3681 100.55C42.7826 100.414 42.2316 100.588 41.7151 101.073C40.72 102.008 40.9 103.196 42.2552 104.64L44.8979 107.454L47.8946 104.64L45.252 101.826Z"
        fill="#00DCF0"
      />
      <path
        d="M36.6102 87.6201L37.5161 87.1959L40.7973 94.2026L30.8889 98.8427L27.7071 92.0483L28.613 91.6241L31.3043 97.371L34.8288 95.7204L32.4292 90.5964L33.321 90.1788L35.7206 95.3028L39.4009 93.5794L36.6102 87.6201Z"
        fill="#00DCF0"
      />
      <path
        d="M24.8237 75.7862L35.754 75.3007L35.804 76.4249L25.873 76.8661L25.9874 79.4425L24.9881 79.4869L24.8237 75.7862Z"
        fill="#00DCF0"
      />
      <path
        d="M37.8619 62.0884C37.4855 63.1046 36.9188 63.9448 36.1617 64.6089C35.3984 65.2596 34.5342 65.6729 33.569 65.8487C32.6074 66.0148 31.6331 65.9151 30.6462 65.5496C29.6593 65.1841 28.8552 64.6251 28.2338 63.8727C27.616 63.1105 27.2344 62.2358 27.0889 61.2485C26.9373 60.2478 27.0497 59.2394 27.4261 58.2232C27.8025 57.2069 28.3656 56.3765 29.1155 55.732C29.869 55.0777 30.7332 54.6644 31.7082 54.4921C32.6734 54.3163 33.6494 54.4111 34.6363 54.7766C35.6233 55.1422 36.4305 55.7078 37.058 56.4736C37.6758 57.2358 38.0574 58.1105 38.2029 59.0978C38.352 60.0753 38.2383 61.0722 37.8619 62.0884ZM36.8946 61.7301C37.1949 60.9191 37.2856 60.1193 37.1666 59.3307C37.0377 58.5385 36.7196 57.8373 36.2122 57.2271C35.6951 56.6133 35.0359 56.158 34.2346 55.8613C33.4334 55.5645 32.6415 55.4823 31.8591 55.6148C31.0669 55.7436 30.3687 56.0684 29.7647 56.5892C29.1509 57.1063 28.6938 57.7704 28.3934 58.5814C28.093 59.3925 28.0055 60.199 28.1307 61.001C28.2497 61.7896 28.566 62.4956 29.0796 63.1192C29.5869 63.7294 30.2413 64.1829 31.0425 64.4796C31.8438 64.7764 32.6405 64.8604 33.4327 64.7315C34.2188 64.5893 34.9187 64.2596 35.5325 63.7425C36.1401 63.2119 36.5942 62.5411 36.8946 61.7301Z"
        fill="#00DCF0"
      />
      <path
        d="M34.5482 46.5269L38.0991 48.949L41.2875 44.2747L42.1139 44.8384L38.9255 49.5127L42.7604 52.1285L42.1087 53.084L33.0701 46.9187L37.2977 40.7208L38.1241 41.2845L34.5482 46.5269Z"
        fill="#00DCF0"
      />
      <path
        d="M46.5513 33.0549L52.9839 41.9053L52.0736 42.567L46.2291 34.5257L44.1429 36.042L43.5548 35.2328L46.5513 33.0549Z"
        fill="#00DCF0"
      />
      <path
        d="M60.6768 37.9107C59.8927 38.223 59.1079 38.2944 58.3226 38.1249C57.5469 37.9516 56.8306 37.5471 56.1736 36.9115C55.5225 36.2623 54.9868 35.4102 54.5665 34.355C54.1462 33.2998 53.9512 32.3175 53.9816 31.4081C54.0178 30.4852 54.2579 29.6942 54.7019 29.035C55.1557 28.372 55.7746 27.8843 56.5587 27.572C57.3429 27.2596 58.1228 27.1901 58.8984 27.3635C59.6838 27.533 60.4069 27.9404 61.0677 28.5857C61.7246 29.2213 62.2633 30.0667 62.6836 31.1219C63.1038 32.177 63.2959 33.1661 63.2597 34.089C63.2197 35.0023 62.9728 35.7904 62.5191 36.4534C62.075 37.1126 61.4609 37.5984 60.6768 37.9107ZM60.2951 36.9523C60.8856 36.7171 61.3379 36.3463 61.6521 35.8397C61.976 35.3294 62.1385 34.7095 62.1395 33.98C62.1406 33.2505 61.9638 32.4405 61.609 31.5499C61.2543 30.6593 60.8258 29.9495 60.3234 29.4205C59.8211 28.8915 59.2769 28.5531 58.6908 28.4052C58.1144 28.2534 57.531 28.2951 56.9405 28.5303C56.35 28.7655 55.8928 29.1383 55.5689 29.6487C55.2547 30.1552 55.0971 30.7732 55.096 31.5027C55.0949 32.2321 55.2718 33.0422 55.6265 33.9328C55.9812 34.8234 56.4098 35.5332 56.9121 36.0621C57.4144 36.5911 57.9538 36.9315 58.5302 37.0833C59.1163 37.2312 59.7045 37.1875 60.2951 36.9523Z"
        fill="#00DCF0"
      />
      <path
        d="M72.2555 29.9348L70.1677 32.3375L70.349 35.2078L69.1947 35.2807L68.5049 24.3613L69.6592 24.2884L70.076 30.8868L76.0704 23.8834L77.3964 23.7997L72.9822 29.0431L78.4137 34.6983L77.041 34.785L72.2555 29.9348Z"
        fill="#00DCF0"
      />
    </svg>
  );
};

export const MobilePlayCircle = (props) => {
  const { height, width } = props;
  return (
    <svg
      width={width || 40}
      height={height || 40}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 20C0 8.95431 8.95431 0 20 0C31.0457 0 40 8.95431 40 20C40 31.0457 31.0457 40 20 40C8.95431 40 0 31.0457 0 20Z"
        fill="#172B4D"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M18.956 26.0028C18.649 26.0028 18.339 25.9368 18.05 25.8008C17.402 25.4948 17 24.8878 17 24.2148V15.7888C17 15.1158 17.402 14.5088 18.05 14.2028C18.782 13.8578 19.65 13.9588 20.259 14.4618L25.358 18.6758C25.767 19.0118 26 19.4958 26 20.0018C26 20.5078 25.767 20.9918 25.358 21.3278L20.259 25.5408C19.891 25.8458 19.427 26.0028 18.956 26.0028Z"
        fill="#E8E8E8"
      />
      <mask
        id="mask0"
        mask-type="alpha"
        maskUnits="userSpaceOnUse"
        x="17"
        y="14"
        width="9"
        height="13"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M18.956 26.0028C18.649 26.0028 18.339 25.9368 18.05 25.8008C17.402 25.4948 17 24.8878 17 24.2148V15.7888C17 15.1158 17.402 14.5088 18.05 14.2028C18.782 13.8578 19.65 13.9588 20.259 14.4618L25.358 18.6758C25.767 19.0118 26 19.4958 26 20.0018C26 20.5078 25.767 20.9918 25.358 21.3278L20.259 25.5408C19.891 25.8458 19.427 26.0028 18.956 26.0028Z"
          fill="white"
        />
      </mask>
      <g mask="url(#mask0)"></g>
    </svg>
  );
};

export const LeadingIcon = () => {
  return (
    <svg
      width="8"
      height="13"
      viewBox="0 0 8 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7 13L1 7L7 1"
        stroke="#52575C"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export const ErrorIcon = (props) => {
  const { height, width } = props;
  return (
    <svg
      width={width || 32}
      height={height || 32}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="16" cy="16" r="16" fill="#FEAE9A" />
      <path
        d="M16.866 6.99996L26.392 23.5C26.4797 23.652 26.5259 23.8244 26.5259 24C26.5259 24.1755 26.4797 24.3479 26.392 24.4999C26.3042 24.652 26.178 24.7782 26.026 24.866C25.8739 24.9537 25.7015 25 25.526 25H6.47397C6.29844 25 6.126 24.9537 5.97398 24.866C5.82197 24.7782 5.69573 24.652 5.60797 24.4999C5.5202 24.3479 5.474 24.1755 5.474 24C5.474 23.8244 5.52021 23.652 5.60797 23.5L15.134 6.99996C15.2217 6.84795 15.348 6.72172 15.5 6.63396C15.652 6.5462 15.8244 6.5 16 6.5C16.1755 6.5 16.3479 6.5462 16.5 6.63396C16.652 6.72172 16.7782 6.84795 16.866 6.99996ZM8.20597 23H23.794L16 9.49996L8.20597 23ZM15 20H17V22H15V20ZM15 13H17V18H15V13Z"
        fill="#BF0A12"
      />
    </svg>
  );
};

export const KeyIcon = (props) => {
  const { height, width } = props;
  return (
    <svg
      width={width || 22}
      height={height || 22}
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.5833 12.8333H11.604C11.1716 14.0566 10.3206 15.0875 9.20148 15.744C8.08239 16.4005 6.76726 16.6402 5.48852 16.4208C4.20978 16.2014 3.04976 15.537 2.2135 14.5451C1.37724 13.5531 0.918579 12.2974 0.918579 11C0.918579 9.70259 1.37724 8.44693 2.2135 7.45497C3.04976 6.46301 4.20978 5.79862 5.48852 5.57922C6.76726 5.35982 8.08239 5.59955 9.20148 6.25602C10.3206 6.9125 11.1716 7.94345 11.604 9.16668H21.0833V12.8333H19.2499V16.5H15.5833V12.8333ZM6.41661 12.8333C6.90284 12.8333 7.36916 12.6402 7.71297 12.2964C8.05679 11.9526 8.24994 11.4862 8.24994 11C8.24994 10.5138 8.05679 10.0475 7.71297 9.70365C7.36916 9.35983 6.90284 9.16668 6.41661 9.16668C5.93038 9.16668 5.46407 9.35983 5.12025 9.70365C4.77643 10.0475 4.58328 10.5138 4.58328 11C4.58328 11.4862 4.77643 11.9526 5.12025 12.2964C5.46407 12.6402 5.93038 12.8333 6.41661 12.8333Z"
        fill="#8F9CB3"
      />
    </svg>
  );
};
export const ButtonLeadingIcon = (props) => {
  const { height, width, type, style } = props;
  return (
    <svg
      width={width || 24}
      height={height || 24}
      viewBox="0 0 24 24"
      fill=""
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11 11V7H13V11H17V13H13V17H11V13H7V11H11ZM12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM12 20C14.1217 20 16.1566 19.1571 17.6569 17.6569C19.1571 16.1566 20 14.1217 20 12C20 9.87827 19.1571 7.84344 17.6569 6.34315C16.1566 4.84285 14.1217 4 12 4C9.87827 4 7.84344 4.84285 6.34315 6.34315C4.84285 7.84344 4 9.87827 4 12C4 14.1217 4.84285 16.1566 6.34315 17.6569C7.84344 19.1571 9.87827 20 12 20Z"
        fill={mapTypeStyleToFill(type, style)}
      />
    </svg>
  );
};
export const ButtonTrailingIcon = (props) => {
  const { height, width, type, style } = props;
  return (
    <svg
      width={width || 24}
      height={height || 24}
      viewBox="0 0 24 24"
      fill=""
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.172 12.0001L9.34302 9.17208L10.757 7.75708L15 12.0001L10.757 16.2431L9.34302 14.8281L12.172 12.0001Z"
        fill={mapTypeStyleToFill(type, style)}
      />
    </svg>
  );
};
export const XButtonIcon = (props) => {
  const { height, width, type, style } = props;
  return (
    <svg
      width={width || 24}
      height={height || 24}
      viewBox="0 0 24 24"
      fill=""
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 10.586L16.95 5.63599L18.364 7.04999L13.414 12L18.364 16.95L16.95 18.364L12 13.414L7.04999 18.364L5.63599 16.95L10.586 12L5.63599 7.04999L7.04999 5.63599L12 10.586Z"
        fill={mapTypeStyleToFill(type, style)}
      />
    </svg>
  );
};
export const BinButtonIcon = (props) => {
  const { height, width, type, style } = props;
  return (
    <svg
      width={width || 24}
      height={height || 24}
      viewBox="0 0 24 24"
      fill=""
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7 4V2H17V4H22V6H20V21C20 21.2652 19.8946 21.5196 19.7071 21.7071C19.5196 21.8946 19.2652 22 19 22H5C4.73478 22 4.48043 21.8946 4.29289 21.7071C4.10536 21.5196 4 21.2652 4 21V6H2V4H7ZM6 6V20H18V6H6ZM9 9H11V17H9V9ZM13 9H15V17H13V9Z"
        fill={mapTypeStyleToFill(type, style)}
      />
    </svg>
  );
};

export const UserIcon = (props) => {
  const { height, width } = props;
  return (
    <svg
      width={width || 56}
      height={height || 56}
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M46.6673 49V44.3333C46.6673 41.858 45.684 39.484 43.9336 37.7337C42.1833 35.9833 39.8093 35 37.334 35H18.6673C16.192 35 13.818 35.9833 12.0677 37.7337C10.3173 39.484 9.33398 41.858 9.33398 44.3333V49"
        stroke="#303030"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M27.9993 25.6667C33.154 25.6667 37.3327 21.488 37.3327 16.3333C37.3327 11.1787 33.154 7 27.9993 7C22.8447 7 18.666 11.1787 18.666 16.3333C18.666 21.488 22.8447 25.6667 27.9993 25.6667Z"
        stroke="#303030"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export const UsersIcon = (props) => {
  const { height, width } = props;
  return (
    <svg
      width={width || 56}
      height={height || 56}
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M39.6673 49V44.3333C39.6673 41.858 38.684 39.484 36.9336 37.7337C35.1833 35.9833 32.8093 35 30.334 35H11.6673C9.19196 35 6.81799 35.9833 5.06765 37.7337C3.31732 39.484 2.33398 41.858 2.33398 44.3333V49"
        stroke="#303030"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M20.9993 25.6667C26.154 25.6667 30.3327 21.488 30.3327 16.3333C30.3327 11.1787 26.154 7 20.9993 7C15.8447 7 11.666 11.1787 11.666 16.3333C11.666 21.488 15.8447 25.6667 20.9993 25.6667Z"
        stroke="#303030"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M53.666 48.9999V44.3332C53.6645 42.2653 52.9762 40.2564 51.7092 38.622C50.4422 36.9876 48.6683 35.8202 46.666 35.3032"
        stroke="#303030"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M37.334 7.30322C39.3416 7.81726 41.1211 8.98486 42.3918 10.6219C43.6625 12.259 44.3523 14.2725 44.3523 16.3449C44.3523 18.4173 43.6625 20.4307 42.3918 22.0678C41.1211 23.7049 39.3416 24.8725 37.334 25.3866"
        stroke="#303030"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export const CheckboxIcon = (props) => {
  const { height, width } = props;
  return (
    <svg
      width={width || 32}
      height={height || 32}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.9993 29.3332C8.63535 29.3332 2.66602 23.3638 2.66602 15.9998C2.66602 8.63584 8.63535 2.6665 15.9993 2.6665C23.3633 2.6665 29.3327 8.63584 29.3327 15.9998C29.3327 23.3638 23.3633 29.3332 15.9993 29.3332ZM14.67 21.3332L24.0967 11.9052L22.2113 10.0198L14.67 17.5625L10.898 13.7905L9.01268 15.6758L14.67 21.3332Z"
        fill="#4FB83D"
      />
    </svg>
  );
};
export const ArrowRight = () => {
  return (
    <svg
      width="8"
      height="13"
      viewBox="0 0 8 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.17266 6.99974L0.222656 2.04974L1.63666 0.635742L8.00066 6.99974L1.63666 13.3637L0.222656 11.9497L5.17266 6.99974Z"
        fill="black"
      />
    </svg>
  );
};

export const ArrowDown = () => {
  return (
    <svg
      width="14"
      height="8"
      viewBox="0 0 14 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.00072 5.17168L11.9507 0.22168L13.3647 1.63568L7.00072 7.99968L0.636719 1.63568L2.05072 0.22168L7.00072 5.17168Z"
        fill="black"
      />
    </svg>
  );
};

export const DribbbleIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21.3212 11.5003C21.2255 9.66391 20.5868 7.89721 19.486 6.42418C19.1506 6.78541 18.792 7.12446 18.4127 7.43917C17.2471 8.40733 15.9446 9.19756 14.5475 9.78417C14.7423 10.1925 14.9208 10.588 15.0783 10.9613V10.9648C15.1228 11.0692 15.1655 11.1742 15.2067 11.2798C16.973 11.0815 18.835 11.1538 20.6398 11.3977C20.8802 11.4303 21.1065 11.4653 21.3212 11.5003ZM10.372 2.80867C11.5089 4.41071 12.5574 6.07375 13.5127 7.79034C14.9395 7.22801 16.119 6.51867 17.0687 5.72884C17.3983 5.45716 17.7086 5.16284 17.9973 4.84801C16.3185 3.43601 14.1943 2.66323 12.0007 2.66634C11.4547 2.66597 10.9097 2.7132 10.372 2.80751V2.80867ZM2.96248 9.66284C3.75725 9.64278 4.55107 9.59492 5.34248 9.51934C7.2554 9.34824 9.15197 9.02759 11.0148 8.56034C10.0412 6.86892 8.99013 5.22334 7.86482 3.62884C6.66282 4.22431 5.60295 5.07132 4.7571 6.11243C3.91125 7.15354 3.29921 8.36439 2.96248 9.66284ZM4.74748 17.8738C5.20015 17.2123 5.79515 16.468 6.58498 15.6583C8.28132 13.92 10.2833 12.5667 12.6003 11.82L12.6727 11.799C12.4802 11.3743 12.2993 10.9952 12.1173 10.6382C9.97532 11.2623 7.71898 11.652 5.47082 11.8538C4.37415 11.953 3.39065 11.9962 2.66732 12.0032C2.66525 14.1412 3.40033 16.2146 4.74865 17.8738H4.74748ZM15.5065 20.6505C15.0566 18.3816 14.4197 16.1539 13.6025 13.99C11.2668 14.8382 9.40598 16.0783 7.96748 17.5577C7.38696 18.1438 6.87177 18.7912 6.43098 19.4885C8.03959 20.6888 9.99361 21.3359 12.0007 21.333C13.2022 21.3347 14.3927 21.1038 15.5065 20.6528V20.6505ZM17.6917 19.3963C19.5131 17.9961 20.754 15.973 21.1765 13.7147C20.7798 13.6155 20.277 13.5163 19.724 13.4393C18.4945 13.2623 17.2469 13.2493 16.014 13.4008C16.7082 15.3595 17.2687 17.363 17.6917 19.3975V19.3963ZM12.0007 23.6663C5.55715 23.6663 0.333984 18.4432 0.333984 11.9997C0.333984 5.55618 5.55715 0.333008 12.0007 0.333008C18.4442 0.333008 23.6673 5.55618 23.6673 11.9997C23.6673 18.4432 18.4442 23.6663 12.0007 23.6663Z"
        fill="#52575C"
      />
    </svg>
  );
};

export const BehanceIcon = () => {
  return (
    <svg
      width="26"
      height="17"
      viewBox="0 0 26 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.68285 0.241211C8.42835 0.241211 9.11785 0.299544 9.74785 0.472211C10.3195 0.577264 10.8652 0.792847 11.3544 1.10688C11.814 1.39504 12.1582 1.79988 12.3869 2.31904C12.6167 2.83821 12.731 3.47404 12.731 4.16588C12.731 4.97438 12.5595 5.66621 12.1582 6.18538C11.814 6.70571 11.24 7.16654 10.5517 7.51304C11.527 7.80238 12.2725 8.32154 12.731 9.01338C13.1907 9.70638 13.4777 10.572 13.4777 11.5532C13.4777 12.3617 13.305 13.0535 13.018 13.631C12.731 14.2085 12.2725 14.7277 11.7557 15.0742C11.1943 15.4456 10.5737 15.7186 9.92052 15.8815C9.23218 16.0554 8.54385 16.1709 7.85552 16.1709H0.166016V0.241211H7.68285ZM7.22318 6.70454C7.85435 6.70454 8.37118 6.53188 8.77252 6.24371C9.17385 5.95554 9.34652 5.43521 9.34652 4.80054C9.34652 4.45404 9.28818 4.10754 9.17385 3.87771C9.05952 3.64671 8.88685 3.47288 8.65818 3.30021C8.42835 3.18471 8.19852 3.06921 7.91152 3.01204C7.62452 2.95371 7.33868 2.95371 6.99335 2.95371H3.66602V6.70571H7.22435L7.22318 6.70454ZM7.39585 13.5155C7.74002 13.5155 8.08418 13.4572 8.37118 13.4C8.66095 13.3449 8.93501 13.2266 9.17385 13.0535C9.40763 12.8846 9.60321 12.6684 9.74785 12.4189C9.86218 12.1307 9.97768 11.7842 9.97768 11.3805C9.97768 10.572 9.74785 9.99454 9.28935 9.59088C8.82968 9.24438 8.19852 9.07171 7.45302 9.07171H3.66602V13.5167H7.39585V13.5155ZM18.4698 13.4572C18.9283 13.9192 19.6167 14.1502 20.5348 14.1502C21.166 14.1502 21.74 13.9775 22.1985 13.6894C22.6582 13.3429 22.9452 12.9964 23.0595 12.6499H25.8712C25.4115 14.0347 24.7232 15.0159 23.8062 15.6505C22.8869 16.228 21.7972 16.5745 20.4777 16.5745C19.6334 16.5771 18.7963 16.4204 18.0102 16.1125C17.3028 15.8472 16.672 15.4111 16.1738 14.8432C15.641 14.3119 15.2472 13.6576 15.027 12.938C14.74 12.1879 14.6245 11.3805 14.6245 10.4565C14.6245 9.59088 14.74 8.78354 15.027 8.03221C15.303 7.30898 15.7113 6.64351 16.231 6.06988C16.7479 5.55071 17.379 5.08988 18.0674 4.80054C18.8335 4.49262 19.652 4.33574 20.4777 4.33854C21.453 4.33854 22.314 4.51238 23.0595 4.91604C23.8062 5.31971 24.379 5.78171 24.8387 6.47471C25.3076 7.14033 25.657 7.88253 25.8712 8.66804C25.9855 9.47538 26.0427 10.2839 25.9855 11.2067H17.666C17.666 12.1307 18.0102 12.9964 18.4698 13.4584V13.4572ZM22.0842 7.39754C21.6829 6.99388 21.0517 6.76288 20.305 6.76288C19.7893 6.76288 19.3869 6.87838 19.0427 7.05104C18.6985 7.22488 18.4699 7.45588 18.24 7.68688C18.0288 7.91001 17.8891 8.19113 17.8387 8.49421C17.7804 8.78354 17.7232 9.01338 17.7232 9.24438H22.8869C22.7725 8.37871 22.4855 7.80238 22.0842 7.39754ZM17.0348 1.33788H23.4608V2.89654H17.036V1.33788H17.0348Z"
        fill="#52575C"
      />
    </svg>
  );
};

export const LinkedIn = () => {
  return (
    <svg
      width="21"
      height="21"
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.3908 18.3955H15.2817V13.5223C15.2817 12.3603 15.2583 10.8647 13.66 10.8647C12.0395 10.8647 11.7922 12.1293 11.7922 13.4372V18.3955H8.68183V8.375H11.6685V9.74H11.7093C12.127 8.95367 13.142 8.12183 14.6587 8.12183C17.8087 8.12183 18.392 10.1962 18.392 12.8947V18.3955H18.3908ZM5.17017 7.00417C4.93281 7.00447 4.69774 6.95793 4.47841 6.86721C4.25908 6.77648 4.05981 6.64336 3.89203 6.47547C3.72425 6.30759 3.59126 6.10823 3.50068 5.88885C3.4101 5.66946 3.36371 5.43435 3.36417 5.197C3.3644 4.83981 3.47054 4.4907 3.66918 4.19384C3.86782 3.89697 4.15003 3.66567 4.48012 3.52919C4.81021 3.39272 5.17336 3.35719 5.52364 3.4271C5.87393 3.49701 6.19561 3.66922 6.44803 3.92196C6.70044 4.17469 6.87223 4.4966 6.94169 4.84698C7.01115 5.19735 6.97515 5.56046 6.83825 5.89037C6.70134 6.22029 6.46968 6.50219 6.17256 6.70045C5.87543 6.8987 5.52619 7.0044 5.169 7.00417H5.17017ZM6.72883 18.3955H3.61033V8.375H6.73V18.3955H6.72883ZM19.9483 0.5H2.0505C1.19183 0.5 0.5 1.17667 0.5 2.01317V19.9868C0.5 20.8233 1.193 21.5 2.04933 21.5H19.9437C20.8 21.5 21.5 20.8233 21.5 19.9868V2.01317C21.5 1.17667 20.8 0.5 19.9437 0.5H19.9472H19.9483Z"
        fill="#52575C"
      />
    </svg>
  );
};

export const ProgrammingIcon = () => {
  return (
    <svg
      width="23"
      height="19"
      viewBox="0 0 23 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.58268 17.1663L13.416 1.83301M17.2493 5.66634L21.0827 9.49967L17.2493 13.333M5.74935 13.333L1.91602 9.49967L5.74935 5.66634"
        stroke="#52575C"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export const DesignIcon = () => {
  return (
    <svg
      width="16"
      height="23"
      viewBox="0 0 16 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.45898 8.625H17.1257L7.54232 23V14.375H0.833984L9.45898 0V8.625ZM7.54232 10.5417V6.91917L4.21882 12.4583H9.45898V16.6692L13.5444 10.5417H7.54232Z"
        fill="#52575C"
      />
    </svg>
  );
};

export const CarouselIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13 9H21L11 24V15H4L13 0V9ZM11 11V7.22L7.532 13H13V17.394L17.263 11H11Z"
        fill="#00DCF0"
      />
    </svg>
  );
};
export const CheckIcon = (props) => {
  const { height, width } = props;
  return (
    <svg
      width={width || 24}
      height={height || 24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM12 20C14.1217 20 16.1566 19.1571 17.6569 17.6569C19.1571 16.1566 20 14.1217 20 12C20 9.87827 19.1571 7.84344 17.6569 6.34315C16.1566 4.84285 14.1217 4 12 4C9.87827 4 7.84344 4.84285 6.34315 6.34315C4.84285 7.84344 4 9.87827 4 12C4 14.1217 4.84285 16.1566 6.34315 17.6569C7.84344 19.1571 9.87827 20 12 20Z"
        fill="#E8E8E8"
      />
    </svg>
  );
};
export const SuccessIconBackground = (props) => {
  const { height, width } = props;
  return (
    <svg
      width={width || 172}
      height={height || 172}
      viewBox="0 0 172 172"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle opacity="0.05" cx="86" cy="86" r="86" fill="#4FB83D" />
      <circle opacity="0.05" cx="86" cy="86" r="70" fill="#4FB83D" />
      <path
        d="M86 32C56.2232 32 32 56.2232 32 86C32 115.777 56.2232 140 86 140C115.777 140 140 115.777 140 86C140 56.2232 115.777 32 86 32Z"
        fill="#4FB83D"
      />
      <path
        d="M113.368 74.5566L84.118 103.806C83.2405 104.684 82.0886 105.125 80.9366 105.125C79.7847 105.125 78.6328 104.684 77.7553 103.806L63.1306 89.1814C61.3705 87.4222 61.3705 84.5778 63.1306 82.8186C64.8897 81.0586 67.7333 81.0586 69.4933 82.8186L80.9366 94.262L107.006 68.1939C108.765 66.4339 111.608 66.4339 113.368 68.1939C115.127 69.9531 115.127 72.7966 113.368 74.5566Z"
        fill="white"
      />
    </svg>
  );
};
export const ShareIcon = (props) => {
  const { height, width } = props;
  return (
    <svg
      width={width || 21}
      height={height || 21}
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.3333 12.1667H9.66667C8.29967 12.1661 6.95853 12.5393 5.78823 13.2458C4.61793 13.9522 3.663 14.9651 3.02667 16.175C3.00878 15.9504 2.99989 15.7253 3 15.5C3 10.8975 6.73083 7.16667 11.3333 7.16667V3L19.6667 9.66667L11.3333 16.3333V12.1667Z"
        fill="#172B4D"
      />
    </svg>
  );
};
export const FemaleIcon = (props) => {
  const { height, width } = props;
  return (
    <svg
      width={width || 40}
      height={height || 40}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.1813 35.0001V30.7731H12.4923V27.132H17.1813V24.4954C15.8013 24.2164 14.5763 23.6584 13.5061 22.8214C12.436 21.9564 11.5771 20.9101 10.9293 19.6825C10.3098 18.427 10 17.0738 10 15.6229C10 14.0047 10.4224 12.5259 11.2673 11.1867C12.1121 9.81955 13.2245 8.73141 14.6045 7.92229C15.9844 7.08526 17.5051 6.66675 19.1667 6.66675C20.8282 6.66675 22.3489 7.08526 23.7289 7.92229C25.137 8.73141 26.2494 9.81955 27.0661 11.1867C27.9109 12.5259 28.3333 14.0047 28.3333 15.6229C28.3333 17.0459 28.0236 18.3851 27.404 19.6407C26.7844 20.8683 25.9255 21.9146 24.8272 22.7795C23.757 23.6444 22.532 24.2164 21.1521 24.4954V27.132H25.5453V30.7731H21.1521V35.0001H17.1813ZM19.1667 20.9799C20.1523 20.9799 21.0535 20.7427 21.8702 20.2684C22.6869 19.7662 23.3346 19.1105 23.8134 18.3014C24.3203 17.4923 24.5737 16.5995 24.5737 15.6229C24.5737 14.7022 24.3203 13.8512 23.8134 13.07C23.3346 12.2609 22.6869 11.6192 21.8702 11.1448C21.0535 10.6705 20.1523 10.4334 19.1667 10.4334C18.181 10.4334 17.2798 10.6705 16.4631 11.1448C15.6746 11.6192 15.0269 12.2609 14.52 13.07C14.0412 13.8512 13.8018 14.7022 13.8018 15.6229C13.8018 16.5995 14.0412 17.4923 14.52 18.3014C15.0269 19.1105 15.6887 19.7662 16.5054 20.2684C17.3221 20.7427 18.2092 20.9799 19.1667 20.9799Z"
        fill="#172B4D"
      />
    </svg>
  );
};
export const MaleIcon = (props) => {
  const { height, width } = props;
  return (
    <svg
      width={width || 40}
      height={height || 40}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.2313 31.6666C15.6111 31.6666 14.1282 31.2542 12.7827 30.4295C11.4371 29.5764 10.3524 28.4531 9.52853 27.0596C8.73217 25.6662 8.33398 24.1163 8.33398 22.41C8.33398 20.7322 8.73217 19.2108 9.52853 17.8457C10.3524 16.4523 11.4371 15.3432 12.7827 14.5185C14.1282 13.6938 15.6111 13.2815 17.2313 13.2815C18.9064 13.2815 20.458 13.7365 21.886 14.6465L24.1927 11.9591L19.4557 9.52765L29.9595 8.33325L30.0007 19.1681L27.1173 14.6038L24.687 17.4618C25.6756 18.9122 26.1699 20.5616 26.1699 22.41C26.1699 24.1163 25.7579 25.6662 24.9341 27.0596C24.1377 28.4531 23.053 29.5764 21.68 30.4295C20.3344 31.2542 18.8515 31.6666 17.2313 31.6666ZM17.2313 27.8275C18.1925 27.8275 19.0712 27.5857 19.8676 27.1023C20.6639 26.6189 21.2955 25.9648 21.7624 25.1401C22.2567 24.3154 22.5038 23.4054 22.5038 22.41C22.5038 21.4431 22.2567 20.5616 21.7624 19.7653C21.2955 18.969 20.6639 18.3292 19.8676 17.8457C19.0712 17.3623 18.1925 17.1206 17.2313 17.1206C16.2702 17.1206 15.3914 17.3623 14.5951 17.8457C13.8262 18.3292 13.1946 18.969 12.7003 19.7653C12.2334 20.5616 12 21.4431 12 22.41C12 23.4054 12.2334 24.3154 12.7003 25.1401C13.1946 25.9648 13.8399 26.6189 14.6363 27.1023C15.4326 27.5857 16.2977 27.8275 17.2313 27.8275Z"
        fill="#172B4D"
      />
    </svg>
  );
};
export const NonBinaryIcon = (props) => {
  const { height, width } = props;
  return (
    <svg
      width={width || 40}
      height={height || 40}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.8973 26.6666C17.2771 26.6666 15.7943 26.2542 14.4487 25.4295C13.1031 24.5764 12.0184 23.4531 11.1946 22.0596C10.3982 20.6662 10 19.1163 10 17.41C10 15.7322 10.3982 14.2108 11.1946 12.8457C12.0184 11.4523 13.1031 10.3432 14.4487 9.51851C15.7943 8.69381 17.2771 8.28146 18.8973 8.28146C20.5725 8.28146 22.124 8.73646 23.552 9.64648L25.8587 6.95909L21.1217 4.52765L31.6255 3.33325L31.6667 14.1681L28.7833 9.60382L26.353 12.4618C27.3416 13.9122 27.8359 15.5616 27.8359 17.41C27.8359 19.1163 27.424 20.6662 26.6001 22.0596C25.8038 23.4531 24.7191 24.5764 23.346 25.4295C22.0004 26.2542 20.5175 26.6666 18.8973 26.6666ZM18.8973 22.8275C19.8585 22.8275 20.7372 22.5857 21.5336 22.1023C22.33 21.6188 22.9616 20.9648 23.4284 20.1401C23.9227 19.3154 24.1698 18.4054 24.1698 17.41C24.1698 16.4431 23.9227 15.5616 23.4284 14.7653C22.9616 13.969 22.33 13.3292 21.5336 12.8457C20.7372 12.3623 19.8585 12.1206 18.8973 12.1206C17.9362 12.1206 17.0575 12.3623 16.2611 12.8457C15.4922 13.3292 14.8606 13.969 14.3663 14.7653C13.8995 15.5616 13.666 16.4431 13.666 17.41C13.666 18.4054 13.8995 19.3154 14.3663 20.1401C14.8606 20.9648 15.5059 21.6188 16.3023 22.1023C17.0986 22.5857 17.9637 22.8275 18.8973 22.8275Z"
        fill="#172B4D"
      />
      <path
        d="M17.1813 36.6666V32.4396H12.4923V28.7985H17.1813V26.1619C15.8013 25.8829 14.5763 25.3249 13.5061 24.4879C12.436 23.6229 11.5771 22.5766 10.9293 21.349C10.3098 20.0935 10 18.7403 10 17.2894C10 15.6712 10.4224 14.1924 11.2673 12.8532C12.1121 11.4861 13.2245 10.3979 14.6045 9.58879C15.9844 8.75176 17.5051 8.33325 19.1667 8.33325C20.8282 8.33325 22.3489 8.75176 23.7289 9.58879C25.137 10.3979 26.2494 11.4861 27.0661 12.8532C27.9109 14.1924 28.3333 15.6712 28.3333 17.2894C28.3333 18.7124 28.0236 20.0516 27.404 21.3072C26.7844 22.5348 25.9255 23.5811 24.8272 24.446C23.757 25.3109 22.532 25.8829 21.1521 26.1619V28.7985H25.5453V32.4396H21.1521V36.6666H17.1813ZM19.1667 22.6464C20.1523 22.6464 21.0535 22.4092 21.8702 21.9349C22.6869 21.4327 23.3346 20.777 23.8134 19.9679C24.3203 19.1588 24.5737 18.266 24.5737 17.2894C24.5737 16.3687 24.3203 15.5177 23.8134 14.7365C23.3346 13.9274 22.6869 13.2857 21.8702 12.8113C21.0535 12.337 20.1523 12.0999 19.1667 12.0999C18.181 12.0999 17.2798 12.337 16.4631 12.8113C15.6746 13.2857 15.0269 13.9274 14.52 14.7365C14.0412 15.5177 13.8018 16.3687 13.8018 17.2894C13.8018 18.266 14.0412 19.1588 14.52 19.9679C15.0269 20.777 15.6887 21.4327 16.5054 21.9349C17.3221 22.4092 18.2092 22.6464 19.1667 22.6464Z"
        fill="#172B4D"
      />
    </svg>
  );
};
