(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{342:function(e,t,o){"use strict";o.r(t);var s=o(7),r=Object(s.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("Tip")]),e._v(" "),t("p",[e._v("The following content is taken from "),t("a",{attrs:{href:"https://github.com/ted423/FXXS-Encode-Guide",target:"_blank",rel:"noopener noreferrer"}},[e._v("FXXS-Encode-Guide"),t("OutboundLink")],1),e._v(", thanks for their efforts")])]),e._v(" "),t("h2",{attrs:{id:"source-encoding-transparency-comparison"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#source-encoding-transparency-comparison"}},[e._v("#")]),e._v(" Source, encoding, transparency comparison")]),e._v(" "),t("p",[t("strong",[e._v("Source")]),e._v(": The source refers to high-quality video that can be used for compression encoding, generally including Blu-ray discs, high-quality WEB (generally 4K SDR), etc. Tablets should be compressed from the "),t("strong",[e._v("best quality source")]),e._v(" to improve compression quality.")]),e._v(" "),t("p",[e._v("With the launch of BD of many old films, many blue light sources are pulled from low resolution to high resolution, which is called "),t("strong",[e._v("upscale")]),e._v(". When suppressing, you should pay attention to restoring the resolution to the original version, and do not suppress too high resolution. rate (when not super resolution).")]),e._v(" "),t("p",[e._v("The WEB source should be used with caution, especially the 1080p web-dl is generally of low quality and cannot be re-compressed. Please do not suppress it if it is not necessary. 4k SDR WEB sources (generally from overseas streaming media such as Netflix and Prime Video) are currently rated well, and may be better than 1080p BD sources, and can be used for comparison with compressed 1080p videos.")]),e._v(" "),t("p",[e._v("For animation, the BD original disk is preferred, followed by high-quality WEB sources such as Crunchyroll")]),e._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[e._v("Warning")]),e._v(" "),t("p",[e._v("It is not recommended to re-encode the video that has already been encoded. Generally speaking, re-encoding violates the principle of selecting the best quality source for compression.")]),e._v(" "),t("p",[e._v("SVFI recommends to use the original disk source to compress")])]),e._v(" "),t("p",[t("strong",[e._v("Encoding")]),e._v(": Encoding refers to compressing and encoding high-quality sources to further save volume. The encoding process mainly deals with source processing, and fixes obvious common problems in the source, usually including dirty edges, color bands, fragments, color deviation, gamma correction, etc.; removes black edges, and removes black borders in the 16:9 ratio of the source ;Suppress space, mainly re-encoding the source with a higher compression method, usually a lossy method.")]),e._v(" "),t("p",[t("strong",[e._v("Transparency Comparison")]),e._v(": Transparency is an index that evaluates the degree of similarity between codes. Good transparency means that even experienced coders cannot clearly distinguish the gap between the suppressed work and the source.")]),e._v(" "),t("p",[e._v("According to the functions of I, P, and B frames, during the encoding process, the encoder generally respects the content of the I frame, even if it is compressed with inferior quality, it will not be significantly converted; for the p frame, the encoder can be converted into The B frame is encoded to save space, and the B frame is re-encoded. Therefore, the transparency should be judged from the comparison of the conversion quality of P->B and B->B in the source and suppression.")]),e._v(" "),t("p",[t("strong",[e._v("Bloating")]),e._v(": It is called bloated, which means that the code rate is higher under the same transparency. According to the more widely accepted rules of suppression, when the code rate of the compressed work is too close to the source, it is also considered Bloating, and the values ​​are as follows: (x265 recommends a smaller ratio)")]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",{staticStyle:{"text-align":"center"}}),e._v(" "),t("th",[e._v("1080p")]),e._v(" "),t("th",[e._v("720p")])])]),e._v(" "),t("tbody",[t("tr",[t("td",{staticStyle:{"text-align":"center"}},[e._v("Original disk rate ratio")]),e._v(" "),t("td",[e._v("75%")]),e._v(" "),t("td",[e._v("50%")])])])]),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("Tip")]),e._v(" "),t("p",[e._v("SVFI uses prefabricated compression parameters to suppress the video stream after super resolution or frame complementation. When it is set to "),t("code",[e._v("AUTO")]),e._v(", it will automatically adjust the compression parameters according to the original video parameters")])])])}),[],!1,null,null,null);t.default=r.exports}}]);