import React from "react";
import Image from "next/image"; // Import Image from Next.js
import HeroBg from "../assets/HeroBg.png"; // Correctly import the image

const Header = () => {
  return (
    <header className="flex flex-col px-[10%] md:px-0 items-center  justify-center relative w-full h-screen">
      {/* Hero Background Image with Next.js Image Component */}
      <div className="hero-img z-0  absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat">
        <Image
          src={HeroBg} // The imported image
          alt="Hero section background"
          layout="fill" // Make it cover the full container
          objectFit="cover" // Make sure it covers the entire space
          objectPosition="center" // Center the image
        />
      </div>

      {/* Hero Text and Button Container */}
      {/* Heading 1 */}

      <h1
        className="text-[#1E1E1E] z-10 font-normal text-center mb-[28px] text-4xl md:text-6xl " // Set font size for small screens and above
        style={{
          fontFamily: "'Foregen Rough One', sans-serif",
          lineHeight: "113.03%",
          letterSpacing: "-0.02em",
        }}
      >
        DISCOVER A <span className="text-[#D30000] ">NEXT</span> LEVEL OF TASTE
      </h1>

      {/* Heading 2 */}
      <h3
        className="text-[#1E1E1E] z-10 font-normal text-center mb-[28px] text-lg md:text-xl" // Set font size for small screens and above
        style={{
          fontFamily: "'Sensation-Regular', sans-serif",
          lineHeight: "113.03%",
          letterSpacing: "-0.02em",
        }}
      >
        The Heart of Authentic, Flavorful, and Ethical Poultry
      </h3>

      {/* Explore Button */}
      <button
        className="flex text-xl items-center gap-2 z-10 md:text-3xl px-[30px] py-[15px] bg-white border-[3.5px] border-[#D30000] text-[#D30000]  rounded-[30px] transition-all duration-300 ease-in-out hover:bg-[#D30000] hover:text-white mt-[28px] "
        style={{
          fontFamily: "'Foregen Rough One', sans-serif",
          fontSize: "18px",
          width: "fit-content",
          height: "50px",
        }}
      >
        <svg
          width="16"
          height="20"
          viewBox="0 0 16 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.6671 11.646C14.6924 11.3298 14.6025 11.0711 14.456 10.8145C14.5843 10.9175 14.6904 11.057 14.7641 11.1883C14.7833 11.2227 14.846 11.1903 14.8581 11.1651C14.9096 11.0641 14.8399 10.9398 14.8086 10.8387C14.755 10.6629 14.651 10.5538 14.5398 10.4366C14.5974 10.4689 14.652 10.5073 14.7075 10.5518C14.7823 10.6104 14.8419 10.7003 14.9349 10.7256C14.9692 10.7357 15.0379 10.7064 15.0339 10.6629C14.9783 10.0708 14.4802 9.53534 13.9043 9.3272C13.8608 8.90082 13.8598 8.48454 13.7598 8.06119C13.6638 7.65299 13.5264 7.25995 13.3233 6.89318C12.8939 6.11923 12.1866 5.51603 11.443 5.0563C10.2477 4.3167 8.69373 3.92366 7.27111 4.14494C6.28195 4.26921 5.40695 4.78653 4.71181 5.51704C4.29452 5.95555 3.94291 6.4961 3.76104 7.07505C3.74992 7.11143 3.74083 7.14679 3.73073 7.18215C3.43165 7.08112 3.08711 7.06394 2.79814 7.08617C2.38085 7.11749 1.91607 7.41454 1.63923 7.71463C1.60184 7.75504 1.64428 7.78535 1.68672 7.77121C1.89688 7.70048 2.12826 7.59035 2.35761 7.59944C2.23536 7.65501 2.13028 7.74191 2.03227 7.848C1.85444 8.03896 1.65641 8.37542 1.62306 8.63711C1.61801 8.67449 1.65439 8.67752 1.68369 8.66944C1.79988 8.6361 1.89082 8.53506 1.98882 8.44513C1.87768 8.60376 1.80998 8.76947 1.79079 8.98771C1.76149 9.3373 1.90698 9.6677 2.02621 9.98698C2.15351 10.3295 2.33741 10.668 2.55363 10.961C2.66174 11.1065 2.77995 11.2328 2.90524 11.351C2.97496 11.446 3.04669 11.5389 3.11742 11.6289C3.48217 12.0856 3.92472 12.4826 4.41071 12.809C4.43698 12.8443 4.46426 12.8797 4.49357 12.9141C4.77243 13.3111 5.17052 13.6294 5.62115 13.8406C6.15767 14.0932 6.70934 14.1275 7.23474 13.9911C7.23777 13.9952 7.24181 13.9992 7.24989 14.0022C8.04911 14.2649 8.90288 14.2649 9.73443 14.2559C10.5933 14.2468 11.448 14.1023 12.2755 13.8729C13.0424 13.6607 13.7649 13.2323 14.2731 12.614C14.4903 12.3472 14.6398 11.9886 14.6671 11.646Z"
            fill="#97999C"
          />
          <path
            d="M13.9894 12.7879C13.4104 13.3931 12.6325 13.7023 11.8332 13.8882C11.0674 14.066 10.3015 14.1519 9.51541 14.1539C8.80511 14.1549 8.07562 14.1468 7.38855 13.9427C7.56941 13.8831 7.74522 13.8043 7.91698 13.7063C7.84929 13.7194 7.78058 13.7265 7.71087 13.7326C7.45221 13.8498 7.19052 13.9387 6.89145 13.971C6.45395 14.0175 6.01241 13.8912 5.62038 13.7063C5.35364 13.581 5.10205 13.4012 4.88381 13.1839C4.7272 13.0596 4.58575 12.9162 4.47663 12.7596C4.27051 12.4635 4.17452 12.1362 4.05833 11.8098C4.06641 11.9977 4.11895 12.1877 4.17553 12.3615C4.1917 12.413 4.21191 12.4605 4.23312 12.508C4.01185 12.3413 3.79765 12.1655 3.5986 11.9674C3.05906 11.4774 2.55184 10.8934 2.26894 10.2518C2.21134 10.1225 2.15375 9.98505 2.10222 9.84359C2.03049 9.65667 1.97087 9.46369 1.92844 9.27576C1.886 9.08378 1.89408 8.90697 1.94561 8.74328C1.97795 8.56546 2.04867 8.39369 2.17396 8.23607C2.17699 8.23203 2.18103 8.23001 2.18406 8.22698C2.18204 8.22698 2.17901 8.22799 2.17901 8.22799C2.09111 8.26133 2.00321 8.30882 1.93147 8.36843C1.88398 8.40784 1.81325 8.49271 1.74657 8.54525C1.82942 8.1704 2.16386 7.67228 2.54477 7.62883C2.57508 7.6258 2.65793 7.56114 2.59731 7.53992C2.3437 7.45403 2.08303 7.54194 1.83851 7.62984C2.29723 7.2176 2.96206 7.07615 3.54909 7.23882C3.58143 7.24084 3.61477 7.24084 3.6471 7.24387C3.78249 7.256 3.90879 7.29338 4.03509 7.3338C3.9775 7.2954 3.91586 7.26105 3.8512 7.23276C4.00377 6.70534 4.26141 6.20823 4.63122 5.75457C5.40214 4.80885 6.53781 4.19352 7.76745 4.16725C7.7725 4.16725 7.77957 4.16422 7.78564 4.16119C9.05771 4.12078 10.3712 4.52998 11.422 5.18067C12.1394 5.62524 12.78 6.22035 13.2074 6.95187C13.4307 7.33481 13.558 7.76018 13.66 8.18959C13.7459 8.55434 13.7449 8.91909 13.7762 9.28788C13.6196 9.24545 13.46 9.22827 13.3044 9.24039C13.5165 9.28889 13.7166 9.34952 13.9015 9.44348L13.9045 9.43944C14.3723 9.65162 14.7613 10.0911 14.8846 10.5741C14.829 10.5327 14.7765 10.4811 14.732 10.4498C14.628 10.374 14.532 10.3266 14.4057 10.2993C14.3855 10.2942 14.3056 10.3235 14.3319 10.3548C14.4259 10.467 14.535 10.5468 14.6138 10.6772C14.6502 10.7378 14.7219 10.8651 14.7563 10.9793C14.6451 10.8257 14.4986 10.6883 14.3248 10.6236C14.3198 10.6216 14.3127 10.6216 14.3036 10.6226C14.3632 10.7418 14.4016 10.8823 14.4259 11.0187C14.5077 11.1985 14.5572 11.3875 14.5492 11.5976C14.533 12.0553 14.2986 12.4645 13.9894 12.7879Z"
            fill="#F8F8F9"
          />
          <path
            d="M6.34625 7.46212C6.40081 7.61873 6.46245 7.77433 6.54328 7.91982C6.67867 8.16433 6.86357 7.94104 6.99896 7.83091C7.26772 7.61266 7.54861 7.40655 7.84667 7.22973C8.38117 6.91247 8.95809 6.64775 9.56635 6.50932C10.6646 6.25976 12.1428 6.2739 12.9319 7.21962C13.3826 7.75917 13.619 8.51898 13.6059 9.25252C13.6645 9.2606 13.7241 9.27172 13.7817 9.28788C13.7503 8.9201 13.7514 8.55434 13.6655 8.18959C13.5644 7.76018 13.4361 7.33481 13.2128 6.95187C12.7864 6.21934 12.1459 5.62423 11.4275 5.18067C10.3767 4.52998 9.06317 4.12078 7.7911 4.16119C7.78403 4.16523 7.77797 4.16725 7.77291 4.16725C7.40008 4.17534 7.03634 4.23798 6.68877 4.34609C6.11689 5.23826 6.00676 6.49215 6.34625 7.46212Z"
            fill="#C7C9CC"
          />
          <path
            d="M14.5549 11.5967C14.5619 11.3855 14.5124 11.1966 14.4316 11.0178C14.4063 10.8814 14.369 10.7409 14.3093 10.6217C14.3174 10.6207 14.3245 10.6197 14.3306 10.6227C14.5033 10.6874 14.6498 10.8248 14.762 10.9784C14.7276 10.8632 14.6559 10.7369 14.6195 10.6762C14.5407 10.5459 14.4316 10.4661 14.3376 10.3539C14.3114 10.3226 14.3912 10.2933 14.4114 10.2984C14.5387 10.3267 14.6347 10.3731 14.7378 10.4489C14.7812 10.4812 14.8347 10.5318 14.8903 10.5732C14.7671 10.0902 14.3781 9.65071 13.9102 9.43853L13.9072 9.44257C13.8112 9.39306 13.7092 9.35366 13.6051 9.32031C13.6031 9.37588 13.599 9.43044 13.594 9.48501C13.8436 9.60322 14.0719 9.76185 14.2598 9.96999C14.2901 10.0043 14.2528 10.0589 14.2113 10.0528C13.9961 10.0185 13.788 10.0296 13.5849 10.0933C13.8769 10.2579 14.0436 10.5782 14.085 10.9107C14.0891 10.942 14.0598 10.9753 14.0264 10.9683C13.8628 10.9329 13.7173 10.846 13.5768 10.752C14.0557 11.5421 13.4485 12.4202 12.718 12.9183C11.5773 13.6973 10.0324 13.8064 8.69363 13.7044C8.65423 13.7013 8.63604 13.6498 8.66029 13.6205C8.86641 13.3679 9.18468 13.1355 9.27056 12.8092C8.22885 13.2295 7.02953 13.572 5.92417 13.2063C5.35734 13.0193 4.82487 12.7 4.49346 12.1888C4.22268 11.7705 4.14387 11.3027 4.05394 10.8268C3.95998 11.1097 3.97917 11.4128 3.90036 11.7038C3.88925 11.7442 3.85288 11.7594 3.8165 11.7372C3.44064 11.5118 3.14359 11.1926 2.79399 10.9309C2.70811 10.8672 2.62223 10.8036 2.53635 10.7399C2.82229 11.1915 3.2032 11.6058 3.60331 11.9685C3.80236 12.1676 4.01757 12.3424 4.23783 12.5091C4.21662 12.4616 4.19641 12.4131 4.18024 12.3626C4.12467 12.1888 4.07112 11.9988 4.06304 11.8109C4.17923 12.1373 4.27522 12.4636 4.48134 12.7607C4.59046 12.9173 4.7309 13.0618 4.88852 13.185C5.10676 13.4023 5.35835 13.5821 5.62509 13.7074C6.01712 13.8913 6.45866 14.0186 6.89616 13.9721C7.19523 13.9398 7.45692 13.8509 7.71558 13.7337C7.78529 13.7276 7.85501 13.7205 7.9217 13.7074C7.74993 13.8054 7.57412 13.8842 7.39327 13.9438C8.07932 14.1479 8.80982 14.156 9.52012 14.155C10.3062 14.154 11.0721 14.0681 11.8379 13.8893C12.6372 13.7034 13.4152 13.3942 13.9941 12.789C14.3033 12.4646 14.5377 12.0554 14.5549 11.5967Z"
            fill="#DADBDD"
          />
          <path
            d="M11.8499 7.78741C11.7276 7.35092 11.4599 7.02457 11.0446 6.83967C10.6445 6.66184 10.1555 6.75277 9.75132 6.86291C8.74497 7.13672 7.91343 7.73588 7.13846 8.4098C7.07178 8.2926 7.04854 8.17034 7.02833 8.03394C7.01418 7.93897 7.07178 7.82883 7.04854 7.74295C7.04045 7.71365 7.01014 7.71264 6.98589 7.72173C6.77472 7.79549 6.63327 7.96827 6.46555 8.10265C6.47969 7.98645 6.59589 7.79549 6.62317 7.7379C6.64236 7.69647 6.60296 7.6793 6.56759 7.69344C6.43422 7.74396 6.3251 7.83692 6.21396 7.92381C6.24124 7.62676 6.28873 7.3489 6.26347 7.04073C6.23922 6.74166 6.19476 6.41025 6.09777 6.12533C5.92095 5.60801 5.3036 5.63226 4.91359 5.87778C4.67615 6.02732 4.48721 6.25263 4.29423 6.45269C4.06083 6.69619 3.89816 6.97001 3.76984 7.28222C3.65263 7.56815 3.56877 7.89249 3.53038 8.22288C3.22322 8.25016 2.92819 8.35726 2.66751 8.55429C2.63821 8.57652 2.6271 8.61896 2.67256 8.62502C2.84534 8.64826 3.01407 8.63411 3.18483 8.67351C2.94335 8.7796 2.52707 8.99381 2.77562 9.15951C2.85039 9.21003 2.96658 9.23125 3.04539 9.27469C3.17876 9.34744 3.26162 9.51517 3.33133 9.64247C3.4647 9.88699 3.61525 10.1184 3.75468 10.3598C4.20228 11.1378 5.05404 11.8259 5.97551 11.8471C6.43119 11.9613 6.92931 11.9219 7.39106 11.9492C7.73459 11.9694 8.02861 12.0553 8.33072 12.2169C8.58533 12.3523 8.74699 12.5413 8.93796 12.7474C8.96928 12.7807 9.04001 12.7302 9.05011 12.6989C9.137 12.4301 9.02182 12.1098 8.83086 11.8764C8.89249 11.8916 8.95109 11.9057 8.99757 11.9209C9.3017 12.0159 9.50983 12.2038 9.73818 12.4129C9.77152 12.4433 9.83821 12.3988 9.84932 12.3655C9.90389 12.1937 9.74121 11.9704 9.64725 11.8451C9.59168 11.7714 9.52398 11.7016 9.4482 11.6461C9.53914 11.6491 9.63108 11.6531 9.72201 11.6612C9.93116 11.6794 10.1151 11.7865 10.306 11.8643C10.3363 11.8764 10.4232 11.835 10.398 11.7946C10.2323 11.5319 9.93319 11.4389 9.6422 11.3611C10.3495 11.3207 11.0426 11.2076 11.4942 10.5943C12.0358 9.85263 12.0893 8.63714 11.8499 7.78741Z"
            fill="#D33A35"
          />
          <path
            d="M15.8708 6.55998C15.983 6.01639 15.8779 5.43845 15.6313 4.94639C15.5081 4.70087 15.3313 4.47555 15.113 4.30985C14.8978 4.14617 14.6432 4.08555 14.3977 3.99461C14.7291 3.90772 15.0413 3.76525 15.3282 3.5753C15.4606 3.48841 16.0193 3.12265 15.7001 2.94381C15.5727 2.87308 15.4384 2.83772 15.2969 2.81549C15.0676 2.77912 14.8513 2.7185 14.62 2.70435C14.2592 2.68212 13.9167 2.69324 13.5692 2.75184C13.9622 2.52854 14.3795 2.34667 14.7553 2.09408C14.8604 2.02335 14.9827 1.92029 14.9817 1.7849C14.9807 1.64345 14.6846 1.58484 14.5977 1.56565C13.6712 1.36155 12.7629 1.68891 11.9263 2.05669C12.1617 1.76974 12.4274 1.38681 12.3931 1.01196C12.3567 0.619926 11.5797 0.941228 11.4089 0.994779C10.9108 1.14937 10.4471 1.4343 10.0267 1.73741C9.69029 1.9799 9.39121 2.24159 9.14266 2.55784C9.21743 2.29413 9.2538 1.99809 8.98504 2.10721C8.74659 2.20421 8.56472 2.43357 8.37476 2.60028C8.11206 2.83065 7.86856 3.06708 7.64224 3.33483C7.17948 3.88246 6.76926 4.44322 6.5106 5.11715C6.26003 5.76683 6.1014 6.50946 6.25094 7.20056C6.25296 7.20864 6.25801 7.2137 6.26407 7.21572C6.28933 7.41779 6.3156 7.61078 6.58335 7.60775C6.85717 7.60472 7.14311 7.37435 7.36236 7.24199C7.84936 6.94898 8.35557 6.68931 8.87996 6.47511C9.55085 6.27505 10.246 6.21544 10.9533 6.29829C11.3867 6.34881 11.8252 6.36901 12.2506 6.47308C12.6699 6.57614 13.0761 6.75195 13.4762 6.91159C13.6409 6.97828 13.7955 7.06214 13.9561 7.13792C14.0865 7.20056 14.2451 7.30059 14.3977 7.28948C14.5553 7.27836 14.7553 7.18237 14.7564 6.99444C14.7564 6.91664 14.7382 6.84289 14.7068 6.77418C14.915 6.93382 15.0746 7.11973 15.2636 7.3016C15.6324 7.65928 15.8365 6.72467 15.8708 6.55998Z"
            fill="#6B0000"
          />
          <path
            d="M15.2209 7.05105C15.1552 6.97022 15.0815 6.89748 15.0037 6.82776C14.9228 6.75501 14.84 6.69439 14.7571 6.63882C14.642 6.53374 14.5116 6.4428 14.3722 6.36298C14.4874 6.48524 14.5753 6.62265 14.6127 6.78229C14.6248 6.83382 14.6248 6.88838 14.6147 6.9389C14.6157 6.94193 14.6167 6.94496 14.6177 6.94901C14.6157 6.95103 14.6137 6.95305 14.6116 6.95608C14.5854 7.06217 14.5096 7.14704 14.3742 7.13896C14.3722 7.13896 14.3712 7.13795 14.3692 7.13795C14.2752 7.16523 14.1792 7.14401 14.0832 7.07227C13.4972 6.76815 12.8647 6.49433 12.2211 6.33772C11.9109 6.26194 11.5896 6.24174 11.2733 6.2094C10.8965 6.17101 10.5267 6.13059 10.1468 6.14272C10.0578 6.14575 9.96994 6.15181 9.88305 6.15888C9.587 6.20637 9.26974 6.24578 8.96158 6.30943C8.76556 6.38622 8.57157 6.46907 8.37959 6.55496C7.97443 6.73581 7.59048 6.96315 7.2126 7.19251C7.04892 7.29254 6.88625 7.39762 6.7064 7.4643C6.43865 7.56332 6.36287 7.31173 6.30224 7.09753C6.23455 5.92043 6.58313 4.7979 7.29848 3.85521C7.63494 3.41165 8.00171 3.00345 8.41799 2.63365C8.48771 2.57202 8.56753 2.51443 8.63219 2.44774C8.67766 2.40126 9.03735 2.05268 9.05049 2.30528C9.0616 2.51342 8.92823 2.71852 8.86458 2.90747C8.84134 2.97718 8.96663 2.93576 8.98684 2.9014C9.41827 2.15978 10.1629 1.64044 10.9197 1.26256C11.1127 1.16556 12.1887 0.704828 12.2241 1.09383C12.2352 1.21709 12.1655 1.35653 12.119 1.46666C12.019 1.70309 11.8765 1.89708 11.727 2.10421C11.7108 2.12745 11.7179 2.13957 11.7341 2.14463C11.7391 2.15473 11.7523 2.1618 11.7765 2.15473C12.1312 2.0547 12.4565 1.87283 12.8111 1.76775C13.2395 1.64145 13.6841 1.58386 14.1327 1.61114C14.3136 1.62226 14.5076 1.6364 14.6743 1.71016C15.0027 1.85364 14.4136 2.14968 14.3095 2.20727C13.9468 2.40632 13.576 2.58111 13.2274 2.80542C13.1617 2.84785 13.2062 2.90342 13.2709 2.88726C13.5972 2.80643 13.9145 2.77511 14.2509 2.78117C14.5773 2.78622 14.8804 2.85493 15.1997 2.90545C15.3058 2.92262 15.4078 2.96203 15.5079 3.00042C15.8231 3.12369 15.2886 3.446 15.1643 3.52481C14.8804 3.70365 14.5672 3.83399 14.2479 3.932C14.2075 3.94513 14.1741 4.0199 14.2388 4.00676C14.2418 4.00676 14.2459 4.00474 14.2489 4.00373C14.2813 4.03304 14.3126 4.04314 14.3611 4.06436C14.5197 4.13407 14.6753 4.18863 14.8279 4.27351C15.0714 4.4089 15.2482 4.62815 15.3947 4.86054C15.6564 5.2748 15.7564 5.77898 15.7382 6.26295C15.7281 6.53778 15.6463 6.78027 15.5564 7.0359C15.4745 7.26829 15.331 7.18543 15.2209 7.05105Z"
            fill="#D30000"
          />
          <path
            d="M15.553 7.03699C15.643 6.78136 15.7248 6.53786 15.7349 6.26404C15.7531 5.77906 15.6531 5.27589 15.3914 4.86163C15.2449 4.62924 15.0681 4.411 14.8246 4.27459C14.672 4.18972 14.5154 4.13516 14.3578 4.06545C14.3093 4.04423 14.2779 4.03412 14.2456 4.00482C14.2426 4.00583 14.2385 4.00684 14.2355 4.00785C14.1708 4.022 14.2042 3.94622 14.2446 3.93308C14.5649 3.83407 14.8771 3.70474 15.161 3.5259C15.2853 3.44709 15.8198 3.12478 15.5045 3.00151C15.4045 2.9621 15.3025 2.9227 15.1964 2.90653C14.8771 2.855 14.574 2.78731 14.2476 2.78226C13.9122 2.7772 13.5939 2.80752 13.2675 2.88835C13.2039 2.90451 13.1584 2.84894 13.2241 2.80651C13.5727 2.5822 13.9435 2.4074 14.3062 2.20836C14.4103 2.15077 14.9993 1.85573 14.671 1.71125C14.5043 1.63749 14.3103 1.62334 14.1294 1.61223C13.6798 1.58495 13.2352 1.64153 12.8038 1.76884C12.4491 1.87392 12.1238 2.05579 11.7691 2.15582C11.7459 2.16289 11.7318 2.15582 11.7267 2.14571C11.7105 2.14066 11.7035 2.12854 11.7196 2.1053C11.8692 1.89817 12.0116 1.70418 12.1117 1.46775C12.1581 1.35761 12.2289 1.21818 12.2167 1.09491C12.1804 0.706926 11.1053 1.16766 10.9123 1.26365C10.1566 1.64153 9.41091 2.16087 8.97948 2.90249C8.95927 2.93685 8.83398 2.97827 8.85722 2.90855C8.91683 2.72972 9.03707 2.53673 9.04212 2.34173C8.74608 2.90754 8.56219 3.52186 8.34496 4.12405C8.92492 3.28543 9.72413 2.59331 10.585 2.06185C10.6981 1.99214 11.2437 1.61728 11.3246 1.90726C11.3892 2.13965 11.2478 2.38518 11.1346 2.57816C11.07 2.6893 10.9972 2.79539 10.9245 2.90047C11.0356 2.82671 11.1478 2.75498 11.264 2.68526C11.6297 2.46702 12.0844 2.1538 12.5279 2.16592C12.8129 2.174 13.015 2.3488 12.7492 2.57412C12.3926 2.87622 11.952 3.04395 11.556 3.28644C11.9379 3.20561 12.3259 3.13791 12.7149 3.12579C13.0685 3.11568 13.6232 3.10457 13.899 3.37838C14.1415 3.62088 13.798 3.74818 13.5909 3.82093C13.2453 3.94117 12.8967 4.06545 12.5381 4.14223C12.7341 4.22408 12.923 4.32309 13.0958 4.44636C13.3211 4.606 13.7515 4.91114 13.608 5.24153C13.4828 5.52949 12.8846 5.27083 12.6947 5.2092C12.3592 5.10109 11.9753 5.09806 11.6257 5.09301C11.2215 5.08795 10.8174 5.09503 10.4152 5.14252C9.62511 5.23446 8.91077 5.43856 8.18531 5.75683C7.87311 5.89424 7.18402 6.29941 6.9193 5.8902C6.71824 5.58001 6.87485 5.07987 6.99508 4.76867C7.15068 4.36553 7.3083 3.95834 7.52351 3.58248C7.54271 3.54813 7.56494 3.5158 7.58616 3.48245C7.48512 3.6037 7.38509 3.72697 7.2891 3.85326C6.57375 4.79696 6.22618 5.91849 6.29287 7.09559C6.35349 7.30979 6.42927 7.56138 6.69702 7.46236C6.87687 7.39567 7.03954 7.29059 7.20322 7.19056C7.58212 6.9602 7.96505 6.73387 8.37022 6.55301C8.56219 6.46713 8.75618 6.38529 8.9522 6.30749C9.26037 6.24383 9.57763 6.20443 9.87367 6.15694C9.96056 6.14886 10.0485 6.1428 10.1374 6.14078C10.5173 6.12865 10.8871 6.16907 11.264 6.20746C11.5802 6.23878 11.9025 6.26 12.2117 6.33578C12.8553 6.4934 13.4878 6.76721 14.0738 7.07033C14.1698 7.14308 14.2658 7.16429 14.3598 7.136C14.3618 7.136 14.3628 7.13701 14.3648 7.13701C14.5002 7.1451 14.576 7.05922 14.6023 6.95413C14.6043 6.9511 14.6063 6.95009 14.6083 6.94706L14.6053 6.93696C14.6154 6.88543 14.6154 6.83087 14.6033 6.78035C14.5659 6.6197 14.478 6.48228 14.3628 6.36104C14.5022 6.44086 14.6326 6.53078 14.7478 6.63687C14.8306 6.69143 14.9135 6.75206 14.9943 6.82582C15.0721 6.89553 15.1459 6.96828 15.2115 7.04911C15.3287 7.18551 15.4722 7.26836 15.553 7.03699Z"
            fill="#D30000"
          />
          <path
            d="M8.22959 3.59145C8.12754 3.36613 7.9386 3.57528 7.86888 3.65308C7.86585 3.65712 7.86181 3.65813 7.85776 3.66116C7.64356 3.90365 7.4718 4.18353 7.34954 4.48362C7.32933 4.53312 7.00702 5.54149 7.29397 5.46773C7.47685 5.42125 7.60921 5.1919 7.70722 5.04438C7.82644 4.86554 7.93961 4.68064 8.02852 4.48463C8.11541 4.29366 8.19927 4.0926 8.22756 3.88345C8.23868 3.79554 8.26798 3.67632 8.22959 3.59145Z"
            fill="#EA6D67"
          />
          <path
            d="M7.05367 5.91416C7.05064 5.91416 7.04861 5.91618 7.04558 5.91618C7.03952 5.92326 7.03245 5.93033 7.02639 5.93841C7.01426 5.95357 6.99809 5.95761 6.98395 5.95559C6.92838 6.02632 6.89403 6.16878 6.88594 6.21526C6.87887 6.25466 6.86675 6.55576 6.98193 6.45977C7.10216 6.35873 7.13652 6.07583 7.07387 5.91113C7.06781 5.91416 7.06175 5.91517 7.05367 5.91416Z"
            fill="#EA6D67"
          />
          <path
            d="M10.6785 1.76768C10.4986 1.74747 10.3178 1.90004 10.2147 2.03139C10.1319 2.13748 9.99446 2.41938 10.2632 2.37088C10.4542 2.33653 10.5865 2.13142 10.6452 1.95966C10.6643 1.90206 10.6846 1.83134 10.6785 1.76768Z"
            fill="#EA6D67"
          />
          <path
            d="M6.34371 7.84219C6.00321 8.0675 6.03554 7.33801 6.01231 7.17533C5.99008 7.02277 5.95876 6.87121 5.92844 6.71965C5.9143 6.52768 5.87995 6.34177 5.81528 6.16596C5.52429 5.37281 4.5624 5.86284 4.35426 6.43573C4.36235 6.41451 4.32092 6.42563 4.31486 6.43775C4.31284 6.44179 4.31082 6.44584 4.3088 6.44988C4.29667 6.47413 4.33507 6.46907 4.34517 6.45695C4.57857 6.15181 4.93018 5.74261 5.36061 5.82748C5.60108 5.87497 5.71727 6.1306 5.77285 6.38925C5.74253 6.36602 5.70717 6.34278 5.66372 6.32257C5.4374 6.2185 5.15449 6.31651 4.9514 6.42361C4.38458 6.72268 4.07641 7.41783 4.01174 8.02406C3.96224 8.48176 4.18957 9.30118 4.81399 9.14154C5.14742 9.05667 5.37576 8.79094 5.54046 8.48378C5.50408 8.61109 5.46569 8.7384 5.42729 8.86369C5.4182 8.89501 5.47579 8.87581 5.48387 8.8556C5.65867 8.40093 5.84256 7.85431 5.91026 7.31376C5.91632 7.4734 5.92036 7.63405 5.95977 7.78763C6.02746 8.04932 6.25884 8.10388 6.4013 7.86037C6.42454 7.81996 6.3619 7.83006 6.34371 7.84219Z"
            fill="#6B0000"
          />
          <path
            d="M5.05852 8.95473C4.80189 9.15883 4.49473 9.07598 4.29973 8.83854C4.14615 8.65162 4.1128 8.38892 4.10674 8.15552C4.09361 7.64123 4.32094 7.13402 4.65336 6.7531C4.82513 6.55709 5.04943 6.41564 5.30708 6.36916C5.58494 6.31864 5.7567 6.46009 5.81227 6.67025C5.8153 6.71673 5.81732 6.76018 5.81934 6.79857C5.82945 7.20576 5.76276 7.61294 5.66475 8.01406C5.52027 8.36265 5.36063 8.71426 5.05852 8.95473Z"
            fill="white"
          />
          <path
            d="M9.23531 10.9176C9.16458 11.0045 9.10497 11.0985 9.05445 11.1975C9.18176 11.0338 9.33129 10.8913 9.49498 10.7701C9.61521 10.664 9.7506 10.572 9.90923 10.4983C10.0274 10.4427 10.1628 10.4043 10.3053 10.378C10.5104 10.3205 10.7246 10.2871 10.9418 10.28C10.758 10.2467 10.569 10.2447 10.3831 10.273C10.3174 10.279 10.2507 10.2871 10.1861 10.3013C10.5731 9.8092 10.765 9.1181 10.7569 8.50378C10.7499 7.95312 10.6751 7.27112 10.0133 7.15492C9.86983 7.12966 9.73242 7.13572 9.60208 7.16401C9.75161 7.08621 9.90721 7.01751 10.0729 6.96598C10.3447 6.8801 10.6701 6.91041 10.9398 6.98922C11.2227 7.07207 11.3187 7.44389 11.3975 7.68739C11.4056 7.71164 11.4652 7.68436 11.4602 7.66112C11.3824 7.30648 11.2591 6.92556 10.8539 6.85989C10.4185 6.78916 10.0669 6.85787 9.66775 7.03873C9.22116 7.24282 8.83924 7.55705 8.43812 7.8339C8.2522 7.96222 8.07134 8.10165 7.89251 8.24007C7.73792 8.3593 7.51765 8.47246 7.38529 8.26432C7.30648 8.14106 7.32467 7.99556 7.31558 7.85714C7.31255 7.81874 7.23778 7.85108 7.23778 7.88341C7.23879 8.08144 7.24687 8.57653 7.59343 8.48055C7.98041 8.37344 8.31586 8.01274 8.64221 7.78843C8.71597 7.73791 8.78771 7.68739 8.86046 7.63687C8.45327 8.05012 8.17642 8.63008 8.10368 9.18478C8.02083 9.81223 8.03396 10.7448 8.81701 10.858C8.96655 10.9065 9.11103 10.9186 9.24743 10.9034C9.24238 10.9075 9.23935 10.9125 9.23531 10.9176Z"
            fill="#6B0000"
          />
          <path
            d="M8.82168 10.7775C8.49734 10.641 8.32659 10.4551 8.23565 10.0904C8.15482 9.76303 8.19322 9.41242 8.23464 9.08304C8.31143 8.48287 8.69538 7.81601 9.17329 7.42702C9.17531 7.425 9.17733 7.42399 9.18036 7.42196C9.21876 7.3967 9.25715 7.37246 9.29656 7.34821C9.57744 7.19362 9.90582 7.16028 10.2231 7.33204C10.6778 7.57655 10.6586 8.1848 10.6646 8.63139C10.6707 9.11638 10.4989 9.6246 10.2675 10.0459C10.211 10.148 10.1463 10.243 10.0735 10.3309C9.98059 10.3581 9.88965 10.3925 9.80276 10.439C9.63706 10.5279 9.46832 10.6602 9.32586 10.8169C9.15106 10.835 8.96515 10.8169 8.82168 10.7775Z"
            fill="white"
          />
          <path
            d="M10.3705 9.88004C10.1887 10.3064 9.69559 10.5045 9.27022 10.3226C8.84384 10.1407 8.6458 9.64766 8.82767 9.22127C9.00954 8.79489 9.50261 8.59685 9.92899 8.77872C10.3544 8.96059 10.5524 9.45366 10.3705 9.88004Z"
            fill="#9F460E"
          />
          <path
            d="M10.0447 9.73866C9.94873 9.96398 9.68704 10.0701 9.46172 9.97307C9.2364 9.87709 9.13132 9.6154 9.22731 9.39008C9.3233 9.16476 9.58499 9.05968 9.8103 9.15567C10.0366 9.25166 10.1417 9.51335 10.0447 9.73866Z"
            fill="#5E0D00"
          />
          <path
            d="M9.74225 9.20424C9.6978 9.30831 9.57655 9.35681 9.47248 9.31235C9.36841 9.26789 9.31991 9.14766 9.36437 9.04258C9.40883 8.93851 9.52906 8.89001 9.63414 8.93447C9.7372 8.97892 9.7857 9.10017 9.74225 9.20424Z"
            fill="white"
          />
          <path
            d="M5.57218 8.1482C5.41355 8.52002 4.98312 8.6928 4.6113 8.53417C4.23948 8.37554 4.0667 7.94511 4.22533 7.57329C4.38396 7.20147 4.81439 7.02869 5.18621 7.18732C5.55803 7.34696 5.73182 7.77638 5.57218 8.1482Z"
            fill="#9F460E"
          />
          <path
            d="M5.28336 8.02597C5.1995 8.22299 4.97115 8.31494 4.77413 8.23007C4.5771 8.1462 4.48516 7.91786 4.57003 7.72083C4.65389 7.52381 4.88224 7.43186 5.07927 7.51673C5.27528 7.6006 5.36723 7.82894 5.28336 8.02597Z"
            fill="#5E0D00"
          />
          <path
            d="M5.02027 7.55914C4.98187 7.65007 4.87578 7.69251 4.78485 7.65411C4.69391 7.61572 4.65148 7.51064 4.69088 7.41869C4.72927 7.32776 4.83436 7.28532 4.92529 7.32372C5.01723 7.36312 5.05967 7.4682 5.02027 7.55914Z"
            fill="white"
          />
          <path
            d="M5.77711 7.53605C5.51239 7.80279 5.16583 7.9695 4.79603 7.77046C4.50706 7.61486 4.41107 7.35822 4.42522 7.08643C4.23122 7.40773 4.11099 7.77955 4.12109 8.15541C4.12715 8.38881 4.16049 8.65151 4.31407 8.83843C4.50807 9.07587 4.81623 9.15873 5.07287 8.95463C5.37498 8.71416 5.53462 8.36355 5.6791 8.01396C5.7175 7.85533 5.75084 7.6967 5.77711 7.53605Z"
            fill="#D5D7D8"
          />
          <path
            d="M9.17032 9.88427C8.61865 9.73372 8.36504 9.19619 8.34787 8.63745C8.29533 8.78598 8.25895 8.93652 8.23976 9.08303C8.19833 9.41242 8.15994 9.76403 8.24077 10.0904C8.33069 10.4551 8.50246 10.641 8.82679 10.7774C8.96925 10.8179 9.15617 10.836 9.33198 10.8158C9.47445 10.6582 9.64217 10.5269 9.80888 10.438C9.89578 10.3915 9.98671 10.3571 10.0797 10.3298C10.1514 10.2419 10.2171 10.147 10.2737 10.0449C10.3818 9.84688 10.4767 9.62965 10.5475 9.40433C10.1938 9.79737 9.71795 10.0338 9.17032 9.88427Z"
            fill="#D5D7D8"
          />
          <path
            d="M7.71477 16.177C7.82995 15.8395 7.9128 15.4859 7.95221 15.1312C7.99566 14.7372 7.97039 14.3472 7.96938 13.9511C7.96837 13.5773 7.98656 13.2075 7.95625 12.8346C7.92695 12.478 7.81379 12.1142 7.69961 11.7757C7.50461 11.1998 7.07216 10.8058 6.44168 10.8573C5.88496 10.9028 5.68996 11.412 5.55962 11.8818C5.39088 12.191 5.18476 12.4638 4.95036 12.7407C4.63512 13.1125 4.32998 13.4934 4.01676 13.8672C3.43478 14.5614 2.90332 15.2777 2.51028 16.0951C2.26778 16.5993 2.19807 17.3874 2.58302 17.837C2.7659 18.0512 3.05083 18.2331 3.34283 18.2058C3.40548 18.1998 3.46307 18.1846 3.51662 18.1644C3.55198 18.3069 3.6116 18.4473 3.70152 18.5807C4.02989 19.0636 4.62804 19.2516 5.18476 19.1556C5.79201 19.0505 6.31437 18.5615 6.68317 18.0977C7.14491 17.5117 7.47531 16.8812 7.71477 16.177Z"
            fill="#6B0000"
          />
          <path
            d="M6.4553 18.1904C5.93899 18.8108 5.15291 19.2918 4.34865 18.9321C3.97177 18.7633 3.76869 18.4814 3.68381 18.1561C3.66361 18.0995 3.64845 18.0419 3.63835 17.9863C3.60298 17.7944 3.6141 17.5943 3.66664 17.4044C3.6919 17.2548 3.7313 17.1053 3.78081 16.9628C4.0617 16.1666 4.53456 15.4412 4.91951 14.6935C5.28426 13.9852 5.59849 13.2588 5.84705 12.502C5.87736 12.409 5.90868 12.3161 5.93899 12.2231C5.95112 12.1877 5.8814 12.2069 5.87332 12.2332C5.5995 13.0486 5.24688 13.8357 4.85081 14.5985C4.48202 15.3068 4.06675 15.9878 3.74342 16.7193C3.55549 17.1447 3.41202 17.6216 3.48982 18.0702C3.30694 18.1308 3.09678 18.054 2.94623 17.9479C2.67646 17.758 2.52995 17.5276 2.47842 17.1993C2.36526 16.489 2.74921 15.7584 3.12406 15.1856C3.55852 14.5207 4.09605 13.9014 4.60932 13.2971C4.92456 12.9263 5.24081 12.5434 5.49139 12.1241C5.50048 12.1534 5.57525 12.1241 5.58738 12.0938C5.63487 11.9665 5.67427 11.825 5.71974 11.6856C5.73085 11.6603 5.74399 11.6351 5.7551 11.6088C5.75813 11.6007 5.75712 11.5946 5.75207 11.5916C5.843 11.3421 5.9693 11.1117 6.22594 11.0026C6.63211 10.8298 7.0979 11.0662 7.34444 11.3875C7.5647 11.6755 7.64755 12.0887 7.73141 12.4323C7.82841 12.8293 7.8375 13.2274 7.83043 13.6356C7.81629 14.448 7.85266 15.2219 7.62532 16.0131C7.3899 16.8214 6.99282 17.5458 6.4553 18.1904Z"
            fill="#D30000"
          />
          <path
            d="M7.71376 16.177C7.82894 15.8395 7.91179 15.4859 7.9512 15.1312C7.99464 14.7372 7.96938 14.3472 7.96837 13.9511C7.96736 13.5773 7.98555 13.2075 7.95524 12.8346C7.92594 12.478 7.81278 12.1142 7.6986 11.7757C7.5036 11.1998 7.07115 10.8058 6.44067 10.8573C5.88395 10.9028 5.68895 11.412 5.55861 11.8818C5.38987 12.191 5.18375 12.4638 4.94934 12.7407C4.85942 12.8468 4.77051 12.9549 4.68159 13.063C4.86649 12.9882 5.05847 12.9427 5.26054 12.9427C5.29692 12.9427 5.33228 12.9751 5.3151 13.0145C4.96652 13.7692 4.53913 14.4866 4.20772 15.2494C4.0501 15.6142 3.90966 15.989 3.71971 16.3386C3.59644 16.567 3.45701 16.862 3.21856 16.9924C2.78712 17.2288 2.58403 16.6943 2.57999 16.3467C2.57797 16.1729 2.59919 16.0072 2.63657 15.8466C2.59313 15.9284 2.55069 16.0113 2.51028 16.0951C2.26778 16.5993 2.19807 17.3874 2.58302 17.837C2.7659 18.0512 3.05083 18.2331 3.34283 18.2058C3.40548 18.1998 3.46307 18.1846 3.51662 18.1644C3.55198 18.3069 3.6116 18.4473 3.70152 18.5807C4.02989 19.0636 4.62804 19.2516 5.18476 19.1556C5.79201 19.0505 6.31437 18.5615 6.68316 18.0977C7.1439 17.5117 7.4743 16.8812 7.71376 16.177ZM5.93851 17.6491C5.62529 18.0452 5.18678 18.3544 4.65936 18.2301C4.18751 18.1189 4.0107 17.5855 4.04303 17.154C4.08951 16.5417 4.36029 15.9719 4.62501 15.4283C4.8968 14.8695 5.18678 14.3209 5.45858 13.7622C5.51213 13.548 5.57881 13.3378 5.67783 13.1438C5.8112 12.8831 6.06279 12.5952 6.34671 12.8609C6.64376 13.1398 6.64881 13.8046 6.67811 14.1805C6.76703 15.3151 6.67306 16.7165 5.93851 17.6491Z"
            fill="#D30000"
          />
          <path
            d="M8.07148 11.1593C8.07249 11.1502 8.06845 11.1441 8.06239 11.1431C8.09876 11.1088 8.12806 11.0673 8.1513 11.0178C8.1705 10.9461 8.1806 10.8733 8.16443 10.8026C8.09775 10.644 7.89062 10.4773 7.80171 10.3995C7.52688 10.157 7.1783 9.95894 6.82466 9.85689C6.79435 9.57904 6.73777 9.30522 6.60945 9.05061C6.41142 8.65555 6.08102 8.33829 5.69808 8.12712C4.93727 7.70781 3.98548 8.17965 3.31964 8.58179C2.53457 9.05566 1.96067 9.7215 1.44841 10.4692C1.15439 10.8986 0.874509 11.3442 0.660307 11.8191C0.443075 12.301 0.280402 12.8062 0.087419 13.2983C0.074284 13.3326 0.105606 13.3377 0.137938 13.3316C0.148042 13.3538 0.212707 13.3498 0.239987 13.3245C0.803782 12.7971 1.60805 12.5011 2.34058 12.295C3.1216 12.0757 4.0158 12.0252 4.82208 12.0717C5.56067 12.1131 6.31644 12.3051 7.05604 12.2414C7.66732 12.1889 8.02399 11.7514 8.07148 11.1593Z"
            fill="#834209"
          />
          <path
            d="M0.300156 13.0436C0.420391 12.7243 0.535575 12.403 0.663894 12.0868C0.846773 11.6341 1.08421 11.2179 1.34388 10.8056C1.80462 10.0731 2.32901 9.40018 3.02819 8.88084C3.68393 8.39383 4.68826 7.84317 5.50869 8.17559C5.93204 8.34735 6.27961 8.71817 6.50695 9.10312C6.64638 9.33955 6.70801 9.60933 6.74742 9.88112C6.74641 9.88415 6.74641 9.88718 6.74843 9.89021C6.75651 9.94679 6.76258 10.0034 6.76864 10.06C6.80097 10.1428 6.83128 10.2267 6.85755 10.3126C6.85048 10.1832 6.84341 10.0539 6.83128 9.92558C7.22634 10.0761 7.60422 10.3267 7.88814 10.6379C7.89319 10.644 7.89724 10.65 7.90229 10.6551C7.91138 10.6652 7.92048 10.6763 7.92856 10.6874C7.96897 10.7369 8.00535 10.7874 8.03768 10.846C8.03061 10.8804 8.02252 10.9117 8.01343 10.941C8.00838 10.9693 7.99727 10.9956 7.9811 11.0178C7.92351 11.1289 7.83459 11.1845 7.71335 11.1815C7.62645 11.1896 7.53956 11.1896 7.45368 11.1815C7.25564 11.1704 6.84038 11.0825 6.82825 11.0905C5.63903 10.9269 4.3811 11.0057 3.24341 11.3947C2.94231 11.4977 2.63414 11.5806 2.33507 11.6917C2.04913 11.7978 1.78845 11.9787 1.52777 12.1343C1.07815 12.4051 0.65278 12.6688 0.300156 13.0436Z"
            fill="#FFCD45"
          />
          <path
            d="M2.39349 9.71942C3.26546 8.95557 4.72344 8.02501 5.90761 8.413C5.78333 8.31701 5.64996 8.23416 5.50649 8.17657C4.68606 7.84415 3.68173 8.39481 3.02599 8.88181C2.32681 9.40115 1.80242 10.0731 1.34168 10.8066C1.3144 10.8511 1.28712 10.8945 1.25984 10.939C1.59529 10.4944 1.9762 10.0842 2.39349 9.71942Z"
            fill="#FFCD45"
          />
          <path
            d="M7.16627 12.1393C6.78738 12.208 6.37615 12.1232 5.99928 12.0817C5.2809 12.0029 4.56756 11.9251 3.84413 11.9857C3.1409 12.0454 2.47001 12.1363 1.80315 12.3747C1.30806 12.5526 0.77357 12.7749 0.35527 13.1133C0.72305 12.7112 1.17469 12.4424 1.64755 12.1585C1.89813 12.008 2.14567 11.8504 2.42151 11.7483C2.7226 11.6372 3.0338 11.5553 3.33691 11.4512C4.47259 11.0633 5.69313 11.0804 6.87528 11.1562C7.17234 11.23 7.69268 11.3674 7.98368 11.2007C7.98266 11.2037 7.98165 11.2067 7.98064 11.2088C7.97761 11.2178 7.97862 11.2229 7.98368 11.2269C7.89678 11.6937 7.67046 12.0474 7.16627 12.1393Z"
            fill="#FFCD45"
          />
          <path
            opacity="0.4"
            d="M8.06922 11.1593C8.07024 11.1502 8.06619 11.1442 8.06013 11.1431C8.0965 11.1088 8.1258 11.0674 8.14904 11.0179C8.16824 10.9461 8.17835 10.8734 8.16218 10.8026C8.09549 10.644 7.88837 10.4773 7.79945 10.3995C7.52463 10.157 7.17604 9.95897 6.82241 9.85692C6.7921 9.57907 6.73552 9.30525 6.6072 9.05063C6.43341 8.70306 6.15657 8.41611 5.83223 8.20898C5.89892 8.27466 5.96257 8.3464 6.02218 8.42521C6.25053 8.73034 6.46069 9.09004 6.46574 9.48308C6.46978 9.81044 6.38087 10.1136 6.26771 10.4157C6.65772 10.4409 7.35084 10.5874 7.3862 11.0381C7.38924 11.0785 7.35185 11.1058 7.31447 11.0926C6.1697 10.6673 4.88146 10.6905 3.69123 10.8936C3.09611 10.9946 2.54545 11.1765 1.99277 11.417C1.723 11.5342 1.44211 11.6544 1.20669 11.8322C1.0329 11.9636 0.866192 12.102 0.671188 12.201C0.626731 12.2243 0.592378 12.1707 0.604502 12.1323C0.712613 11.7898 0.850025 11.4644 1.00866 11.1502C0.880337 11.3674 0.761111 11.5897 0.658052 11.8201C0.451934 12.2758 0.295324 12.7517 0.116486 13.2175C0.646938 12.6011 1.5189 12.2202 2.2191 11.909C3.28606 11.4351 4.44902 11.2856 5.60894 11.2614C6.01713 11.2533 6.54152 11.2149 6.90829 11.4281C7.10835 11.5443 7.27102 11.7868 6.96588 11.8908C6.8022 11.9464 6.63246 11.9626 6.46372 11.9949C6.21214 12.0434 5.96257 12.107 5.71301 12.1677C6.16061 12.2253 6.61023 12.2798 7.05278 12.2414C7.66507 12.1889 8.02174 11.7514 8.06922 11.1593Z"
            fill="#DC7000"
          />
          <path
            d="M3.09977 15.71C3.46957 15.0017 3.97779 14.3713 4.46278 13.7398C4.81338 13.2821 5.14984 12.8193 5.37819 12.302C5.14883 12.6516 4.87805 12.9769 4.60929 13.2942C4.095 13.8984 3.55849 14.5178 3.12402 15.1826C2.75018 15.7555 2.36522 16.486 2.47838 17.1963C2.51678 17.4368 2.60569 17.6247 2.75624 17.7823C2.63499 17.0842 2.78352 16.3173 3.09977 15.71Z"
            fill="#EA6D67"
          />
          <path
            d="M3.8734 18.3592C3.82187 17.7954 3.96636 17.2417 4.19875 16.7294C4.74637 15.522 5.67997 14.4207 5.6638 13.0405C5.45162 13.6053 5.20408 14.155 4.92622 14.6935C4.54127 15.4412 4.06841 16.1667 3.78752 16.9628C3.737 17.1053 3.69861 17.2548 3.67335 17.4044C3.62081 17.5943 3.60969 17.7944 3.64506 17.9864C3.65516 18.0429 3.67032 18.0995 3.69052 18.1561C3.73195 18.3127 3.80065 18.4592 3.9027 18.5886C3.88856 18.5067 3.87946 18.4279 3.8734 18.3592Z"
            fill="#EA6D67"
          />
          <path
            d="M6.0972 9.39293C6.02344 9.35049 5.90522 9.42223 5.84359 9.45658C5.69911 9.5364 5.57988 9.64249 5.46773 9.76273C5.39094 9.84558 5.19998 10.0285 5.20907 10.1457C5.21109 10.1639 5.22726 10.1719 5.24342 10.1729C5.40812 10.181 5.60009 10.0022 5.72335 9.91024C5.82439 9.83447 5.95675 9.69301 6.03253 9.56166C6.03657 9.59501 6.03556 9.63138 6.03253 9.65058C6.02748 9.69402 6.12246 9.66068 6.12852 9.62734C6.14367 9.56065 6.16792 9.43334 6.0972 9.39293Z"
            fill="#834209"
          />
        </svg>
        <span>EXPLORE MENU</span>
      </button>
    </header>
  );
};

export default Header;
