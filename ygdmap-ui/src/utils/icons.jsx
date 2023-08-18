const ToolIcon = ({ size, color = "#206CC9" }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_554_1711)">
        <path
          d="M23.2455 7.80938C23.3955 8.21719 23.269 8.67188 22.9455 8.9625L20.9158 10.8094C20.9674 11.1984 20.9955 11.5969 20.9955 12C20.9955 12.4031 20.9674 12.8016 20.9158 13.1906L22.9455 15.0375C23.269 15.3281 23.3955 15.7828 23.2455 16.1906C23.0393 16.7484 22.7908 17.2828 22.5049 17.7984L22.2846 18.1781C21.9752 18.6937 21.6283 19.1812 21.2486 19.6406C20.9721 19.9781 20.5127 20.0906 20.1002 19.9594L17.4893 19.1297C16.8611 19.6125 16.1674 20.0156 15.4268 20.3203L14.8408 22.9969C14.7471 23.4234 14.419 23.7609 13.9877 23.8312C13.3408 23.9391 12.6752 23.9953 11.9955 23.9953C11.3158 23.9953 10.6502 23.9391 10.0033 23.8312C9.57208 23.7609 9.24396 23.4234 9.15021 22.9969L8.56427 20.3203C7.82365 20.0156 7.1299 19.6125 6.50177 19.1297L3.89552 19.9641C3.48302 20.0953 3.02364 19.9781 2.74708 19.6453C2.36739 19.1859 2.02052 18.6984 1.71114 18.1828L1.49083 17.8031C1.20489 17.2875 0.956457 16.7531 0.750207 16.1953C0.600207 15.7875 0.72677 15.3328 1.05021 15.0422L3.0799 13.1953C3.02833 12.8016 3.00021 12.4031 3.00021 12C3.00021 11.5969 3.02833 11.1984 3.0799 10.8094L1.05021 8.9625C0.72677 8.67188 0.600207 8.21719 0.750207 7.80938C0.956457 7.25156 1.20489 6.71719 1.49083 6.20156L1.71114 5.82187C2.02052 5.30625 2.36739 4.81875 2.74708 4.35938C3.02364 4.02187 3.48302 3.90937 3.89552 4.04062L6.50646 4.87031C7.13458 4.3875 7.82833 3.98438 8.56896 3.67969L9.1549 1.00312C9.24865 0.576562 9.57677 0.239062 10.008 0.16875C10.6549 0.05625 11.3205 0 12.0002 0C12.6799 0 13.3455 0.05625 13.9924 0.164062C14.4236 0.234375 14.7518 0.571875 14.8455 0.998437L15.4315 3.675C16.1721 3.97969 16.8658 4.38281 17.494 4.86563L20.1049 4.03594C20.5174 3.90469 20.9768 4.02187 21.2533 4.35469C21.633 4.81406 21.9799 5.30156 22.2893 5.81719L22.5096 6.19687C22.7955 6.7125 23.044 7.24687 23.2502 7.80469L23.2455 7.80938ZM12.0002 15.75C14.0721 15.75 15.7502 14.0719 15.7502 12C15.7502 9.92813 14.0721 8.25 12.0002 8.25C9.92833 8.25 8.25021 9.92813 8.25021 12C8.25021 14.0719 9.92833 15.75 12.0002 15.75Z"
          fill="#3DA0A8"
        />
      </g>
      <defs>
        <clipPath id="clip0_554_1711">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

const FileUploadIcon = ({ size, color = "#206CC9" }) => {
  return (
    <svg
      width={size}
      height={size}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
    >
      <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
    </svg>
  );
};
const DefaultIcon = ({ size, color = "#206CC9" }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="0.5"
        y="0.5"
        width="23"
        height="23"
        fill="#FEECEC"
      />
      <rect
        x="0.5"
        y="0.5"
        width="23"
        height="23"
        stroke="#DA0C0C"
        strokeLinejoin="round"
        strokeDasharray="2 2"
      />
    </svg>
  );
};
const TableIcon = ({ size, color = "#206CC9" }) => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask id="path-1-inside-1_4_887" fill="white">
        <rect
          width="18"
          height="18"
          rx="0.5"
          transform="matrix(-1 0 0 1 18 0)"
        />
      </mask>
      <rect
        width="18"
        height="18"
        rx="0.5"
        transform="matrix(-1 0 0 1 18 0)"
        stroke="#3DA0A8"
        strokeWidth="2"
        mask="url(#path-1-inside-1_4_887)"
      />
      <path
        d="M15.5 15.5H13.5"
        stroke="#3DA0A8"
        strokeLinecap="round"
      />
      <path
        d="M17.5 13.5H0.5"
        stroke="#3DA0A8"
        strokeLinecap="round"
      />
      <path
        d="M15.5 11.5H13.5"
        stroke="#3DA0A8"
        strokeLinecap="round"
      />
      <path
        d="M17.5 9.5H0.5"
        stroke="#3DA0A8"
        strokeLinecap="round"
      />
      <path
        d="M15.5 7.5H13.5"
        stroke="#3DA0A8"
        strokeLinecap="round"
      />
      <path
        d="M17.5 5.5H0.5"
        stroke="#3DA0A8"
        strokeLinecap="round"
      />
      <path
        d="M15.5 3.5H13.5"
        stroke="#3DA0A8"
        strokeLinecap="round"
      />
      <path
        d="M11.5 0.5V17.5"
        stroke="#3DA0A8"
        strokeLinecap="round"
      />
      <path
        d="M5.5 0.5V17.5"
        stroke="#3DA0A8"
        strokeLinecap="round"
      />
      <path
        d="M9.5 3.5H7.5"
        stroke="#3DA0A8"
        strokeLinecap="round"
      />
      <path
        d="M9.5 7.5H7.5"
        stroke="#3DA0A8"
        strokeLinecap="round"
      />
      <path
        d="M9.5 11.5H7.5"
        stroke="#3DA0A8"
        strokeLinecap="round"
      />
      <path
        d="M9.5 15.5H7.5"
        stroke="#3DA0A8"
        strokeLinecap="round"
      />
      <path
        d="M3.5 15.5H2.5"
        stroke="#3DA0A8"
        strokeLinecap="round"
      />
      <path
        d="M3.5 11.5H2.5"
        stroke="#3DA0A8"
        strokeLinecap="round"
      />
      <path
        d="M3.5 7.5H2.5"
        stroke="#3DA0A8"
        strokeLinecap="round"
      />
      <path
        d="M3.5 3.5H2.5"
        stroke="#3DA0A8"
        strokeLinecap="round"
      />
    </svg>
  );
};
const DataEntryIcon = ({ size, color = "#206CC9" }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.2969 10.1719L12.2969 16.1719C11.8562 16.6125 11.1438 16.6125 10.7078 16.1719L4.70312 10.1719C4.2625 9.73125 4.2625 9.01875 4.70312 8.58281C5.14375 8.14688 5.85625 8.14219 6.29219 8.58281L10.3703 12.6609V1.125C10.3703 0.501562 10.8719 0 11.4953 0C12.1187 0 12.6203 0.501562 12.6203 1.125V12.6609L16.6984 8.58281C17.1391 8.14219 17.8516 8.14219 18.2875 8.58281C18.7234 9.02344 18.7281 9.73594 18.2875 10.1719H18.2969ZM3.25 16.125V19.875C3.25 20.9109 4.08906 21.75 5.125 21.75H17.875C18.9109 21.75 19.75 20.9109 19.75 19.875V16.125C19.75 15.5016 20.2516 15 20.875 15C21.4984 15 22 15.5016 22 16.125V19.875C22 22.1531 20.1531 24 17.875 24H5.125C2.84688 24 1 22.1531 1 19.875V16.125C1 15.5016 1.50156 15 2.125 15C2.74844 15 3.25 15.5016 3.25 16.125Z"
        fill="#3DA0A8"
      />
    </svg>
  );
};

const Icon = ({ name, size = 24, color }) => {
  const icons = {
    tool: ToolIcon,

    fileUpload: FileUploadIcon,
    default: DefaultIcon,
    dataEntry: DataEntryIcon,
    table: TableIcon,
  };

  const Component = icons[name];
  return <Component size={size} color={color} />;
};

export { Icon };
