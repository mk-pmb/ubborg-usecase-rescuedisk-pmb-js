// -*- coding: utf-8, tab-width: 2 -*-

export default async(bun) => {
  // Driver for Realtek 802.11n NIC

  bun.needs('admFile', {
    path: '/lib/firmware/rtlwifi/rtl8188eufw.bin',
    mimeType: 'blob',
    uploadFromLocalPath: true,
    downloadUrls: [
      // URL from https://github.com/raspberrypi/linux/issues/764 :
      ('http://web.archive.org/web/20200711191717if_/'
        + 'https://raw.githubusercontent.com/lwfinger/rtl8188eu/'
        + 'c83976d1dfb4793893158461430261562b3a5bf0/rtl8188eufw.bin'),
    ],
    verifyContent: {
      sha512hex: [
        // calculated from the file installed by Ubuntu trusty
        'e90d356780da27fa585c63d94e482c4f858beacbacc3e8b5a9645ffcca8d2e2a',
        '84247bab22300ad14dab4467bdfb493e43a608bce57b4a94dbb6604b42766248',
      ],
    },
  });
};
