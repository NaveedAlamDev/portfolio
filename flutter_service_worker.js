'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".dart_tool/dartpad/web_plugin_registrant.dart": "7ed35bc85b7658d113371ffc24d07117",
".dart_tool/package_config.json": "7047357501afa4b3970ad2fb996a1ce3",
".dart_tool/package_config_subset": "b3cacbfefa0c1f420120772d07c2a1bd",
".dart_tool/version": "6bcc3684f18aa21874fa709f122723cf",
".git/COMMIT_EDITMSG": "ec69f3e1eddce251aac4c434b1401d7e",
".git/config": "aeab44f82ec74d23ed695b5519e7a4bc",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "f48d32fa38299fa153b87e45f1340ae2",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "a6df1cafeb03363a367025414acab930",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "267fd9ceb97d25a78c2b36c1ec111d87",
".git/logs/refs/heads/main": "6fb17da4511df030e2fe8442176a50ff",
".git/logs/refs/remotes/origin/main": "94037cedec3b7866abcd8e7db90175ad",
".git/objects/00/8fa38e5fe5090348fa498c243aa94b89d95e51": "18c5b5873bf5a85f1623b7e42486bcc1",
".git/objects/01/fd9d0adc783a686307acb646114e047459021e": "f3e8a3e5a72b13918ecb9d5c0c41ff22",
".git/objects/03/4309761afb205d76063d70782cbff463024f49": "193953dd2ac146e1563036fe4f08d7ed",
".git/objects/04/1a3855474575f3224e068641f65d9623220a8a": "2d9c42ba702acf1be7fa2fb1de56e2b2",
".git/objects/04/67bf12aa4d28f374bb26596605a46dcbb3e7c8": "49dba9cdefacac2602a7af98a656e661",
".git/objects/05/79914241c3cb28836edd11ef2bf2fbcdd79b74": "92042366e582669fabfa1ad8f8e2f55b",
".git/objects/06/1d8ceeed28dc88541fe78986703cb5bf64b43e": "11b8531096a6f87fc221e06470154b21",
".git/objects/06/952be745f9fa6fa75196e830d9578eb2ee631d": "cb6848767aab99a89a4ec04efbc00625",
".git/objects/08/3a42e9bd5d6658301398b4eea5d5ddda1995ad": "a983f9bdb637c07237592c6e41bab260",
".git/objects/08/739968e5999a122ffd2e41d9ad23bf4a27c891": "edc0f4c2afa6457ec84586766fed3c00",
".git/objects/09/88e65c4035c7d73815911264fe285cb0826be1": "54df0ae7375e4d9709064e358fc725e1",
".git/objects/09/d4391482be68e9e4a07fab769b5de337d16eb1": "a603712ac5534497bc4fd35ebd46b0b7",
".git/objects/0a/3f5fa40fb3d1e0710331a48de5d256da3f275d": "15924b1217c401aba33f13069f7d81d5",
".git/objects/0b/edcf2fd46788ae3a01a423467513ff59b5c120": "23a6b285e31cde5ab29a2fc1ebfdb935",
".git/objects/0e/c303439225b78712f49115768196d8d76f6790": "383f775ddf0900dd9fe74e867c012ba4",
".git/objects/0f/9be0c2609b292cba6194ee9c0d84b4d81b4f46": "b9a0bff00b67e87079ad14f4536c871a",
".git/objects/10/d5a30e14fb1a62a5e050053ee6201f50ae399a": "62892da3c791f2feb2d547a9ce615455",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/13/ae400b890ef90fe14afbfe9a567a812926e027": "65b2f3a0f40210aec538a8940773754f",
".git/objects/13/b35eba55c6dabc3aac36f33d859266c18fa0d0": "ccb5b80ef3b4fb1030a8a4f520f3f5e8",
".git/objects/14/8da3098986ea6c098d5a7b1f8e9cbf6b427b56": "9bfb32c54891d8b9226a37dddd010698",
".git/objects/15/be13ed6975ee1be48a6816c126502640848d53": "06aef93eba29f8ae9c78bda45643692c",
".git/objects/16/e8ec96b2ea536319cbe5f23262d2bd8e8a124c": "60d222a5565b1973c14e70925cbec91b",
".git/objects/17/04ca6b2a88acd27f5db4c7cfe03c09594bdd17": "b3e25164e174026f903cca9d67709078",
".git/objects/17/987b79bb8a35cc66c3c1fd44f5a5526c1b78be": "f47de426b1d6c272d2659c734c9de80f",
".git/objects/17/a4de0aa37da6ae5ee7d0d9c14d2f59bf44dc72": "9ea3daed8e42ae1e70aef767c8fa1119",
".git/objects/17/e9516a74074fad22bac3e52e39131886697622": "2cccf0b2cd7b787a1f969f9552b76de3",
".git/objects/18/64ea0da2a992844b836ddab32903582640ad31": "f0adb3646c11eb718156800d635ac4cb",
".git/objects/18/d981003d68d0546c4804ac2ff47dd97c6e7921": "318597cf2655c5770342bae4ab7b90a3",
".git/objects/19/9433e69d71b1174825833ddc53fdc53c05c10e": "d86cdb43ab4243ca2d6aa6cee781aab1",
".git/objects/19/f590628b080de16a0f93aa1a224b253ea88585": "971ea7dc080c5248bec84e06e7a029d5",
".git/objects/1b/05a7fbf0f87377ffdd9b63a29af0ec0242dc04": "415977577eaaa3452b1ec5c563f38f4b",
".git/objects/1b/ccb3d07bfc77df8c08bacda9b2e97733ae08af": "eaedbcd714adee7aee97c3f0b7131f5d",
".git/objects/1c/726254592a71e9c6b32039d0c88d038aa96623": "30bcdb40fd979b5d14b02d5e531d3d0d",
".git/objects/1d/12a4b6d1d3ca622439944615d7a48f4104f28d": "29cc53c7e17a90fa4a179a2e5e224582",
".git/objects/1d/526a16ed0f1cd0c2409d848bf489b93fefa3b2": "12bcdfd9683b55567627456d0773a4e5",
".git/objects/1f/4d0085fd2946a0aeb6228d0bd8de1bf9c2cf0d": "3d5d7f6e619472f5848094e59f33df47",
".git/objects/20/8180a10143a4c069cafa131ad60b89df7bcddd": "2b9f3f4ffba79325ebaa796d932bf12b",
".git/objects/22/491ac4dc822d313762aa2fd202020695f11f3f": "64a6cf4cd3d7afb35aa83ebac1beee4a",
".git/objects/22/c4462b79288fe10768cc571a36732ce5726025": "3e3cf5fc8864e978934ad77759390731",
".git/objects/22/feb4c88aa2d3a62b86080b67cb0a90fcf04ad5": "4610ed83fe2b5853d909eac40642c136",
".git/objects/23/248418d819304baca0a96179b45a6d9cf2bfeb": "3446f37b0273d353b5eb62b9c06128f7",
".git/objects/24/476c5d1eb55824c76d8b01a3965f94abad1ef8": "272edacb42df12790f46462d08bc4696",
".git/objects/24/f2032bc55465cd635bcc1a3702c581c08b18df": "a1ef11b0f2d8d66c9b93897e419464ba",
".git/objects/27/22837ec9181c3c1b2f1c1298870185c03ba354": "55274092f8c707defc529cc6940e63ee",
".git/objects/27/b9edf23fe822c523a4dbeb9bfd19283a7b13c2": "f067d1175d0db2a38c9daf7525a6009c",
".git/objects/27/da8a361da5a2bd91d62b8d0aa3e5c818c9f951": "4bfc3c48a008c6fc6d4a152b497bf252",
".git/objects/28/5d3b3a65eb455d410c3bf31fccc8dbbc8cbdbc": "8f13b3e9424f71d09fc00a1d9e39692c",
".git/objects/28/9ce7a8a42c4518f94f3699c258fe3c882c270e": "8e5254a9a6151a15688652456216c070",
".git/objects/28/b6d54519047d6b9e7fb5160ab2d411ee349636": "ea303b253263e48400f488973a5fa3c8",
".git/objects/2a/b022196b0fad3910d38ae050ab6814be931799": "effb58727f53792624b2dede6a94285d",
".git/objects/2b/a0ade8c6a3299e69d2ba63c88d67390c15a8a2": "62e800016434dacd6b6b037b13f91698",
".git/objects/2d/774698bb85c9e886477e878d9ef01c3233e57b": "708e687c30c8c79ca347729fa46e900a",
".git/objects/2e/1de87a7eb61e17463f7406106f6c413533cecf": "f4970286a19c04f87217910d26430ddf",
".git/objects/2f/1632cfddf3d9dade342351e627a0a75609fb46": "eebc09df6f2f2370e95a1eb0bc1fb2c5",
".git/objects/2f/9a5c9356c30fa0dc442a2c0ff763e9fe998ca5": "6d78a55a787440b5e5f42065923a8b16",
".git/objects/30/4732f8842013497e14bd02f67a55f2614fb8f7": "76eb293b5c9304707852ee681a90e8fc",
".git/objects/30/8a2a560b42f17aaf3c36e4e9c8cd07182fbb7e": "bc183808cfc617fa9474743616eb4aee",
".git/objects/31/beb85cfdcac3ec3d3b802c77c8dd1e8964c75d": "5763799a8f47a8007db6877df018de40",
".git/objects/32/1773cd857a8a0f0c9c7d3dc3f5ff4fb298dc10": "aa6f1636c8ce237c3c416d222abf03da",
".git/objects/32/6c0e72c9d820600887813b3b98d0dd69c5d4e8": "3030e2c76fcd41356672eee54ca3bd94",
".git/objects/32/8156df9ef7ea52f9bdc328581d14de8685c6c1": "2f104704935f819693b2e033b6b5a5d1",
".git/objects/32/9da900b5a6d1f4f9e503771a7812a4eaf0ee05": "c2a05669516d4e8a2e84e2f441c5d0e2",
".git/objects/33/cf9e362cf604f1d05b80bfd67d6d5e563b4c4a": "7eba8541c400f6206fbaa3219fa44585",
".git/objects/34/7139c48727d4f32a2b9bac862fb4793356cc63": "f12c4e44afc2ef65f4df0d401fdf25b5",
".git/objects/36/23e09a0eaa621a307e3a70ffe12127d32e6b35": "3fcf4815cfcd157970a5476777605b15",
".git/objects/36/b0fd9464f45b33f482e64bea579787e142affa": "9d308f3efbc512e2b01277fb7565acef",
".git/objects/36/cbce676bcfbddfa689b9d0abf23ac40fd2e60b": "8c963983d40f36e775abdac45c7810e0",
".git/objects/37/7996bfbe18503ce2af4724f6e7c6269f5ea101": "86545f6a5b343672c1a9dce9fe8671f4",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/38/79d54755798567f0f318d63340508d5668eb96": "cfe50cd405acbf1c250baa58cfe6b9ed",
".git/objects/39/4917c053a04daa76d8b94f0a02db0bd99e1034": "bbdd537b090d83597a791f77deacff5c",
".git/objects/39/76559effb57cfa978aac2180d8876556c331aa": "b0d80fc41c7598de5a56ec1dff34b1ca",
".git/objects/39/7f31ef328c036c55ac3430ca1a60e4c3afb41d": "a4ba3091bf16338379fc0cd7903e4859",
".git/objects/3a/f93b882364ddc13fefa4826038d2c851bf5ea1": "e87d124937e3bd3d761e6be5e6312868",
".git/objects/3b/2e1d2167dae4eb05dbcdcf71ed35c90a19a899": "9dcd46caeee07b3009e351d77ad6970a",
".git/objects/3c/472b99c6f3501ff93513bcdf39dabe4f236a55": "f1663221d4180a0bffd3a0a98ec3b762",
".git/objects/3d/0585e16958528ec6f2a30e9314dd3394df8ffe": "b7a446e7b1070a0aaaeec0c43b0619df",
".git/objects/3d/3ee4a025d1a1fec87536562b0afd3dfab395d8": "218dfe4f265f5332ac4dc38e673346cc",
".git/objects/3d/f3d1a91dec9f419bbf32c7dbd7ffe3049577b7": "2da7aed2720fec500109845fe6130ee3",
".git/objects/3f/4246826353c94f0bb73628b0ce014c55600f54": "acbec3b08bf4c13b1e75073d8c7ed556",
".git/objects/3f/6ed2c7ea8940c9a630f39fcc523fdb5b4c10dc": "f4b464868d750da2ca891473a6e6e5a3",
".git/objects/40/0a3ba674fb45cb827a99e865c45f8ff6fec861": "6620a2e7c77a009db627efee05764ecc",
".git/objects/40/0e29deb869bf8a2bd40bd458f54f0b784f226e": "3cc02e7de298c89186ac2b49a30a57f9",
".git/objects/40/55861e1ceac96b14f777d48b949f25dfa9297e": "3794c5fbca8f5cd062caa49fc9d85c89",
".git/objects/42/a0bcd8bb490270983afbd7314279b20be288cc": "e5f2e67624382f45b21d8bf8361135ee",
".git/objects/42/bcbf4780b187e80025b7917058bcb882012aa1": "d13c60a94845ee93e5124ec90980bb48",
".git/objects/44/4bb7ffa14c08951e283af25d79d72f5c727fbd": "80d35887cac784949e25e87d6a4d15e5",
".git/objects/44/a9719c68e3d911d5ac56183c19ec5e8941ebca": "0a5f31083ea981876a41a848a094c0be",
".git/objects/44/d746f731abd48b36c4261f0efab841cbd1405f": "488294823338b63cad37eae3f2bd9925",
".git/objects/44/e62bcf06ae649ea809590f8a861059886502e8": "2e42f843c31c0484de7ce7a7c79cd856",
".git/objects/45/9da2c8d76668fb6415aa127819a7e369ef03c9": "51818d933e112c2318583c23469c6508",
".git/objects/46/203996d3943540d81e516dc03e54ed112aec36": "92f0c5d2d370b0d8748fc85b4c9fb64c",
".git/objects/46/b726bd53d47e61ba941eb355b9c8633ebbaa20": "480b1cf7af4c452e5722818c06aca052",
".git/objects/47/89daa6a443eefa7f3f729164a18351e06e9800": "3c2dcd6a17cdfc0957293d41ef712d24",
".git/objects/48/f3a1fab37c54fe87a8485fca1c4ecc0f3cce3f": "47feadda65fae8550fad5cb013b4944b",
".git/objects/49/938d3f0c07beb7194c72b623c46ebc2acc28a1": "c52513b902ead034bc9a32ad0ecef9b8",
".git/objects/49/f7fbf534608f38d42a844180850ba102801f69": "dff2804fc000aeaba231e560f26ffcf8",
".git/objects/4a/c93b4b39efb4e741709718b778bd06ee7c771e": "ea2d9ebba023e79e0416da3e27f1a126",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/4c/d7b0099ca80c806f8fe495613e8d6c69460d76": "171b7f459d8f957102dab0e55cc51039",
".git/objects/4d/39fc2b8ceb4da263bbe26330bd9912e3058df0": "0562ef7682b238023fa0e6c1f011f1fb",
".git/objects/4d/6372eebdb28e45604e46eeda8dd24651419bc0": "1a6a714da9180a4b75ff188c6eb0514f",
".git/objects/4d/afdfe71d4d3e5596374d9673ca7a9e346c1042": "2a6a7f7f78ead9c9c8d387a23c68f645",
".git/objects/4f/006d07ab0131980aabf12f06605ee562c73c45": "9fe8efdce339e8b2d4ca3939873a512b",
".git/objects/4f/51b335bc025ec1fbde1ad4bce869f713a697a9": "a813133ef253a84acbcbe9fa6064f1df",
".git/objects/50/2f463a9bc882b461c96aadf492d1729e49e725": "b4ba046789856764dffa013b321284b3",
".git/objects/50/8ea638245877cecf531a98ef93a72af33c65fb": "c0a2a665dbb641eb93670b797e72b5a2",
".git/objects/51/58e5fd006b4bc8b6f7636e3cd1ef3d1411c2dc": "3396a01c4337162038dd957cad89473f",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/55/c41d520665a7cb02a3925221ba0ac0262cbeb0": "c3784037e8d4d25c70c25a977347740b",
".git/objects/57/7d7e5a9f5ef90bef5a5ef277af7cd5935d6da9": "5afa83323bb8c5f183b156b66d437d84",
".git/objects/58/54629c55e00bc884eda5a7795da45949ca2932": "5006b0ce51002ef6dcd2008fe2a51d74",
".git/objects/58/a8c74b1474314872720da1c0de0d755ccb3a59": "51a28df1c4c02557494c5900590fe573",
".git/objects/59/2ceee85b89bd111b779db6116b130509ab6d4b": "348329ef452b809389b6496387db6913",
".git/objects/5a/56f8176bcc6d12e40edcdb8198839f1ce3a5a7": "7727e049a628617dd0fee98a3dad907c",
".git/objects/5a/88276a7b36980d2efa2689a410aebb67aa65b8": "3f57df6a0c0d74a105194c1575657bd0",
".git/objects/5b/670c7a280cba054d0c989c9fb052541dce1d4f": "e500670b499a24cadaff0cf0925a7e2b",
".git/objects/60/989c5bed7f44d76d26277ac8568ef43f6c0183": "05ee57e03e67b9254b778e4e82ed8d2a",
".git/objects/61/083838c65d610f77e557fcdd85e5c789dc75c8": "7f9b20ce31d6daaf2ed5b9d7fc112c19",
".git/objects/61/b6c4de17c96863d24279f06b85e01b6ebbdb34": "5486bd6a506a32f8c081890c2befb8eb",
".git/objects/62/c7a24a426c99108debbf9c6f1052e3b506f861": "f90c4c4dcdc4d868812b2a1c128be35b",
".git/objects/63/b69ccf9e43220a0c7dc1877adf2f549390de37": "49616c94a6e5046a7f34af35ef13c766",
".git/objects/64/23d0a1754313c50ab39e2ddaa8f3d74892134b": "dec1800386794d7c316af2e4a78e0d27",
".git/objects/64/35c65440662b7a656ef98832aacb5b0b6f93e3": "3658f753542e4521f133cdca225e59c4",
".git/objects/66/a65d1e4a79f230031ec0e0959a721039e7282f": "2a87e723b46c44522c16c0968efa0152",
".git/objects/66/f861c2b95be4970ea498ec398266dfa76e4779": "e990b37b559c7b06a44e5aa3faf7ef4e",
".git/objects/67/a88f00c7c1657a42db8f2987290fd997b4f529": "1f3d0f55261d30a5acbfb8386c6be1c6",
".git/objects/69/0dbba97f29a0d912cb5f24e1591c2883d489da": "efe79b3600ee5ddf8649e80f229a4f5a",
".git/objects/69/2f20751030c4928576112dd36703233631b9c4": "b62dad7ea8839abdf748010697b0324e",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/6a/aa91c5e79d7b862f02ee96ceb97a6cee552e2e": "1d078a8abf30ad6e8e998b068c5982d0",
".git/objects/6c/8e736c9131cbed40246aad6c478f4be38fbd3f": "f2b1e79be5b3a72ec8b64640a7d3e089",
".git/objects/6d/a0652f05f28fc6950cec20ebdfbae89b665479": "fccd5f0f0fbfe5ead1a5622148fb8d74",
".git/objects/6e/2814eb1361802b24242e1362a97acbef360746": "378c773e3f71e801de4ebe1eeaf0df3f",
".git/objects/6e/d2d933e1120817fe9182483a228007b18ab6ae": "e67768e46e6cb02c375dcbe6443df2e5",
".git/objects/6f/568019d3c69d4966bb5a0f759980a1472afc1e": "11711ec452167a523e427fab835abd15",
".git/objects/6f/91a917e0c65ac28eeceb5e52ca8884b2851958": "6b8404a3d630e7540a820b0193ceb967",
".git/objects/6f/caf409794df3e7f9e992677891740abe1498fc": "cec360896a0cda2de778b0ec01915108",
".git/objects/70/693e4a8c128fc4350b157416374ca599ac8c7b": "6942d9ddf2906a8e847e7ef6889a4221",
".git/objects/70/c4ad1612540c3fa3856679714e9253b12f751e": "83d28d873a248d5285bc8eea69bf115c",
".git/objects/71/bcac3b1c1e2c8e826c5ee7863fd74e07c8daef": "a82af7772cb66026ec036fdd354d4389",
".git/objects/72/271d5e41701cfbffad74d38640bf9cc7c1f7be": "e07153a480d4e159b70f80851f6a553d",
".git/objects/73/53c41ecf9ca08017312dc233d9830079b50717": "32c4c29220bb05d460a969e7df99412c",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/74/6adbb6b9e14b7e685c91e280a4d37a672afbd8": "eba295c22165b01ec06a735e4dbb3a44",
".git/objects/75/27bf0cb0eba2f70bde95d58dad76e848832bfd": "c9cf0c6f8537738c5bf9883ab6907281",
".git/objects/75/48b6466076581c35bc8fa397b6d73c8166d392": "6cab9fad95b1f93a13e63f702d687f9c",
".git/objects/76/e1789b06850f063df87b763f25be27996e1488": "c89d99a85cd4a01ccd99d8ccd5d82e85",
".git/objects/77/2ef4a7a320e1b4f429ace0d0dca2708c7de46f": "cb2940b3494143eba6b31a09d3f36755",
".git/objects/78/8a96672334e16dec0fd94a6c45da35228655d0": "53588e0f0fc4230693ed43fa98919711",
".git/objects/79/7d452e458972bab9d994556c8305db4c827017": "009f1a67118a52459bbc67f56c2ffd4a",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/7f9873ad7dceb4dc17087fb06c800fa0191376": "91f6523d91623d19d122fea7b32a3db9",
".git/objects/7a/85977c9dc884c46fd653227579779a5cd27299": "f5755e0c041e14e5a52fec8782334cf1",
".git/objects/7a/d6a5ab724ccfac453c16594d58ce6d14b0d9b3": "df83a4fae75e068f4f24f694910dd718",
".git/objects/7b/5cd91655ea0cde8383b87fb9edde525ac3eda8": "94f51d9f76c0e9cde10178ca8991461b",
".git/objects/7d/412892bf0e477bec8435a10087ddff77dd513a": "a6e6ab7176f7d3ac62b259a6853de991",
".git/objects/7d/d61b5bbb663499744afb662189bc71180e1177": "cdc77bf07762397029f349e4e28d6363",
".git/objects/7d/fa047586ac75371f46b685d51dbad07a42d0d2": "385dcdec49f2db0cdae8332e07771133",
".git/objects/7e/44cffee9a15ad203961f9e7d1d89e3a27b433b": "91cf5a9575cd6a3966d9b6c34e0d10bf",
".git/objects/80/e867a4e06b4dc26d0a2b327cbd54041addc50a": "a256672b7db051545b2b39eb821c1510",
".git/objects/81/f8da657f4d111d76b4d2cd5a7411b77310dc0d": "8b8ee3407d538b030f8eb735009c6074",
".git/objects/82/b6f9d9a33e198f5747104729e1fcef999772a5": "32d0349a1626c50624f6aab0900c31d8",
".git/objects/84/9bea7724ffa03ffdaf81fb7507176918509b0e": "42cef85901fc706bdf8c9ecd1aff33db",
".git/objects/84/ac32ae7d989f82d5e46a60405adcc8279e8001": "a7755246641eb6f0ea897123c42e7eeb",
".git/objects/85/2fa1a4728ae4789e3bca55dd07caef3b41f2a5": "97bf964ac33d3f622d940921761e740c",
".git/objects/85/5bc46f3245f6acb1d1288e6432ebe75a044a97": "1001dea82fb6fdc2f3d0c37426d84a38",
".git/objects/86/4a0d28df8a409f465690e62aa8ff814494248b": "fd309b67973388ea21187784c9f35afe",
".git/objects/87/dc5d8ceabbd3227eab5f24ac01975dd2ed174d": "86deb45fd2f6d6375c93ed5a4ba4a43a",
".git/objects/87/edd5c344416a5f2e1d29e5de26d2fee85c1954": "f3fe7c1171c87c6ba372797588db07bd",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/53cba09064923c5daf2d37e7c3c836ccdd794b": "41d25b277c37a913abe0083c22f1e1b2",
".git/objects/89/5b8c4dd4415e0130d021ef602b0ec23af47eb2": "bced695db414a64609be5ec4496079c7",
".git/objects/89/c2725b70f1882be97f5214fafe22d27a0ec01e": "99b17ebd650decc04c5de3b0893b27f7",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/f1917f6016a3cf5fdea178071aeddcbe838518": "4055405dbb2b34676463dfa0bda6f7ac",
".git/objects/8a/f96a2c8ade099adb3fca57791d512ff901fc4a": "d25ee2521973bcf7a4fc7ba6e7142677",
".git/objects/8b/6d4680af388f28db8742ef7fb8246e2bb1fffb": "4e20d4660135ff8d41852fa5b986bfb5",
".git/objects/8b/d06bdf095c809f80d639847440b06b0199a88c": "58d6dcf8e95c016f9f2dd6468f1fcdf1",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/8d/443d5d56ac36091e9689cd5d1b1948d9124545": "eb1c5a32937a98bb8b8612d5fad02130",
".git/objects/8e/2d09b6ba618e083fd3083466fbeccd047f4674": "81b0d825fcb96d80ff29c2a0dff1a1d4",
".git/objects/8e/c38eb36774d8ac00ebe4d64ba7d0ab84ec6be1": "cbb8d8f664a9e946387581741cca089d",
".git/objects/90/f0efed678a1291d5896e3d19ce7db171681691": "1c5a94974be3fbbf9cfd35f956987b76",
".git/objects/91/9434a6254f0e9651f402737811be6634a03e9c": "6da5342c04a33ac2131fdae2e4a84892",
".git/objects/92/11171c0ebe5ad33a7e7d798763df78abff548f": "3ce295ed1ba06df3a0acf4770be66e8d",
".git/objects/93/0d2071a324ee6050cccd87a14495557b63416f": "27184823c9e5055a30e98ccf70968672",
".git/objects/94/2696edf165691fd811f6aaaac84f4a12ab4d75": "ef29112f76a8abaebeeb8a385b4bc19b",
".git/objects/94/adc3a3f97aa8ae37ba567d080f94f95ee8f9b7": "daee15d8fbbf348420b6eaf3d86cbf40",
".git/objects/94/b9f0e88f1880fff41307b8ddda50f16c40d676": "bee9e60fa635ae8cbfaedc95ccb50e4d",
".git/objects/95/3ac6033b63253b55bc4e72cff42cd651af68ff": "d2cad37b89b3f7c8e677b51c3bd2cea7",
".git/objects/95/428ba6de306dc7ab8ed1f7e2df0c136af167b8": "e43dc370c03d4df666757157ec15fe7b",
".git/objects/96/25e105df39e8429814f3189a8015087720cba1": "dc4647a7fac13cea763bcd9ca601edf5",
".git/objects/98/125de0c0c4964a93bbf6b7be36c9d1ac2deca4": "7e10c7465d94ffaf5cfa0e2dd7e84e0b",
".git/objects/99/0df0549bcc76bb9d8f0de9e066d337de97d0ce": "e438e0b890a99652d59df6f5178998e8",
".git/objects/99/48a2405e0835326813c2c258849b838e4620e7": "3ef327f4e9fdc5d2bd8be0af37221a02",
".git/objects/99/cd5ac725132f097bc3c02c2dfcdc828527c0b8": "330530fadacfaec7119c4c15a9dacf98",
".git/objects/9b/7e78ffc28735033ff1024fe5c1206da0a93f7c": "82476228a013dc5235f854d8372e779a",
".git/objects/9c/18822406260b93aba93d207ac58e318b1e5927": "ae836f61a04c1e0e5a68f11d57dee12e",
".git/objects/9c/72f0967221c414af9a5610dfbbe766c8004e59": "83c07b28f8addcd82a9a5b109ff7c4cc",
".git/objects/9d/a19eacad3b03bb08bbddbbf4ac48dd78b3d838": "1176aaa6ff7a19c56cf9a6ea692a2c03",
".git/objects/9e/5984eb467b353d0ff01dc05083e1fb65aa5775": "86959b11dcf77de16f4d94fb7c5a8955",
".git/objects/9e/d7cbf8c27878550d051cbd789f69cb49f944ed": "a027bc54d58044b1e53aec46d24d7bb0",
".git/objects/9f/20c17ce2ee9b97cd8f9a2be7b4fbce20958f9c": "ae2c012c4620b6082ff24e509669629c",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a2/ec33f19f110ebff51a23342d7bc29ec9a1aaa6": "48569d95657b1f4b8fad6b6e730d4334",
".git/objects/a4/2ea7687cb67e55af955dc8874a072e087ce3ed": "b51e31b93bc1bfcb23a9226ab3e3c5eb",
".git/objects/a5/47d7530b17547f40e077669375b1875461b335": "9e2b85de372e6f80ffa977145f86f3c4",
".git/objects/a5/74fb9e3907608e950927d928b60aed4a83795a": "7523ce0bb7bc23ef4659f02814cc43df",
".git/objects/a6/19843f55e60c2fc168fe9f0afc867c44799a04": "62cce156a87ced41bad31aa355bf32df",
".git/objects/a6/368af0ee7628fa194ef8fe3bbe4523113d6e05": "bafb07bb0e67f8a015ad7c670f7072fd",
".git/objects/a7/65b041ecd98667509ff18830ec36638bad6411": "a20a34524ec7793d6ece84f93dcfa946",
".git/objects/a8/7eef84a5d29844f41176f808a797cea593616b": "bbe3fc3e1c5e6135804ae185063dc396",
".git/objects/a8/e64fdfeb26c1371bc1169043e31175cea36ef3": "ee36831733b04277c6a77d9ebfa7d16c",
".git/objects/a9/91f51138ffe059d588003dc7936aff059a0428": "b73a35563fa129bd884d8b5c53ee9231",
".git/objects/a9/e0b6b8203f4a98f35c49d72372aa912338f82e": "067d38da72caa85a918af64f6dc281d1",
".git/objects/aa/0a7bd653ec20b94f49b64f9b71f9ac286398e6": "9de4a2178aac294ebbfb7a5013dac4d5",
".git/objects/ad/2f90b78480aeb6608226d9db4ecbd3ec06aaeb": "4add97a99941aa0e9eed0f2173416ade",
".git/objects/b2/5e363efa423f6d2dd97d425eb0f1364dbcbe3e": "2820837aa1faa39ed5cf46ba48151ff4",
".git/objects/b2/c213b41e3b08405783afd59971950c3762c14d": "d01bd3e2c9938c72a7195986d02bd917",
".git/objects/b3/2774881fdec27436e4cb2d915e38b5be19cac1": "722a1ea4c226ff17af805f51e858f523",
".git/objects/b4/2f3882e8c84c4293ca393ad446500e121cf4d7": "13f070325a7c16715ebcfafb5a3496f8",
".git/objects/b5/2a953be1046d31edda587b0a02e259c082885d": "82d5801d0f2cdc868d947185cc592309",
".git/objects/b6/bf06a7c44f9aa965b92adf547a970d052d14e1": "85a0b6cab1b02ad09fba41a087d28771",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/3c4c30c16703f640bc38523e56204ade09399e": "d81d171c0590dfeb78e8d6c404330bb1",
".git/objects/b9/44b4ec24a98850f5599d6795fcfa08874e080e": "bd36b5019f02ea0928bdb6d702c45582",
".git/objects/b9/484fab003e2e3d07ebaeab09c23bdbdaca2894": "edaa7558afe136c2b342b9433dd588b5",
".git/objects/b9/4d47f3af31505f3cfcba533da52b881b6a1b33": "ab777130815383dc41d27318b6ffbe0e",
".git/objects/ba/50c828254e73c225377b30de8f6be700a35916": "87328c8715b1cdbdf29836385def957b",
".git/objects/ba/86c5eb654a153d6b89f4e79fcc04fd460231f7": "4bd062c75319de20a39a861dd9dd0867",
".git/objects/ba/f3d77f76706dbc82162dd6bc9a1365ac5be830": "3fdbb77ecc95ce55cfcedebbe781f150",
".git/objects/bc/0cff99d64b7e8de94c36e1ef43af8c5d1a8b75": "774651e535fcb1cb7cd473c868ec792c",
".git/objects/bd/30fe6425a2732677e54ec29e1a8d50d772d3db": "be5196714a7047c405284002d8e0e2e0",
".git/objects/bd/b57226d5f2bd20f11934f4903f16459cf52379": "3289c6c0ee8813484d2b33d6c6e1df10",
".git/objects/be/06e7fdca57d8fc360647d7b7a6a0c7b2da7e26": "bae1db93c8ff34b5d96b8a5eaf24771a",
".git/objects/be/fa1caf35e2593ef36d028cf49dc076c824adfb": "7702b2b27e1d232a25458555809b4a61",
".git/objects/bf/b34b1d678c1de94ad5a4c659a165e3a8018c38": "1eff6aa3b513324b37786ae0a4a4accf",
".git/objects/c0/4e20caf6370ebb9253ad831cc31de4a9c965f6": "5e216dece9f226a4ac045363fbbe142a",
".git/objects/c1/5b6051c4002c18c04d7cd730589615f49424a3": "e8fa6ba80687d6b30aca29e9961061cc",
".git/objects/c1/646fb831c2e531a4eefeb08ae33bdbbf3e6fab": "bbd4ea0180ee107ea5b82c3aa119d670",
".git/objects/c2/2ee77e8ac031a7f9fe3c0062e0b3a5f986773f": "5ad10c3399277da6f829deb06b89a48f",
".git/objects/c2/efd0b608ba84712fb3e1d01122468a50c7fba1": "5841aa09610800cbb88a643fdc9ede63",
".git/objects/c4/3cc9b8ba4e4ae5c6df5ed5e3f199668b7fead0": "e70044978ca80324fbe375a7e1547ad3",
".git/objects/c4/3db629b58f3d425dd071cdcfcce513ef0f6fa5": "f1bfd4353fe142b2cbe9311be770d071",
".git/objects/c5/5d22333dc4aaaeae98d649a13a07e53c756bca": "d299a2f8a0773daa107c0b031e6b1585",
".git/objects/c6/42c4407383040e2118b9f130c5b37015cb90a8": "0a650bda2019ff9d87abba2cdfd41bc7",
".git/objects/c6/fca74c2affa569e9a8d2d40d6ebfd00bf06f3e": "88576517ed0f1def9d54843c52ad7e73",
".git/objects/c7/3943fde880f3c4e2e2322d4317e87ee10f0f69": "806a09b5ac988f245a25e67efe4a7dd8",
".git/objects/c8/6632d8a6b9c87253eb597d2607460abf793ad3": "182503991567a1d1b9904639ae7e6b4b",
".git/objects/c8/7d15a335208541da7c11961b0f6d5f6035512e": "a6105aabe7a3384131da4bf043c5878b",
".git/objects/c8/95b09749c3b685543d1620f5b804b8a540218a": "543f48cf2fb7cbe795a8bfd6daf0a107",
".git/objects/c8/fce5f334b2c1da3db9e4789c867023c79ec841": "70e5f6cf81a7fb18d0758a08987f8a25",
".git/objects/c9/919543d82358b8c080d2c9cdd8ff7f0e9a3646": "b98e27597404c8a78719b08511a48295",
".git/objects/ca/14a82172ae66e74dbff443ecbf0bc0552b80bc": "a0a3165ec4963fca610a4b5403bbc075",
".git/objects/ca/328ef36105fc4d14a69ea6fdde32225be1061b": "3982238047303d48a90004bab76ab3d6",
".git/objects/cb/1ef88056edd1caf99a935e434e7ff6943a0ef6": "06da19129aec844c2a975f2175eb659b",
".git/objects/cc/576f888a925fb53bbeb37cac70a0951471cfc0": "bdc50735e35a2750b2d998c9114fa618",
".git/objects/cc/cf817a52206e8a8eef501faed292993ff21a31": "1b4dd6ab7f4ca9073eac414dd6794fd6",
".git/objects/cc/fab74c1f56c330985060e2247607eaedb3c7d7": "ad5b6117df489509af208438785f208b",
".git/objects/d0/2735f9729a999d6de6afbde86d9eba18aaa572": "b42426c897eafb1a4438be2d830a637d",
".git/objects/d0/651fda5fbc1e0e728fe38d2abc65f7250c177d": "6bc02ac128f6ce47d177770d0a6103f8",
".git/objects/d0/dfec62385fa9b51ed07e09b0e5bbc92448afad": "a7d78c847609bc2b5c43bdfc10227583",
".git/objects/d3/6b1fab2d9dea668a4f83df94d525897d9e68dd": "f19c13a91df6187b27767a0c81787173",
".git/objects/d3/896c98444fbe7288d434169a28c532258a4466": "65bd2275cf87203cd8cbaa19e4cce2fc",
".git/objects/d3/b9e0aafa70e7b518de6d7f36503def555e3867": "c4acea7ad0add3f7670f8bff8463c738",
".git/objects/d4/1586cb2549a1eea5a8c079d16b737f2f700bd4": "8588a8e3dbbc63f40970ee514713f9fa",
".git/objects/d4/92d0d98c8fdc9f93ad2543bb4f531803e9df72": "e3677ae8914304b8340d8db27e7db71a",
".git/objects/d5/04fb32d6e7d412eff9d7931788ecfcef03a4c8": "42d0688dcfbca08df3a9a91219868ad0",
".git/objects/d5/3ef6437726b9d1558eda97582804175c0010a2": "764cc945f02614c5bb082a403a0c55e0",
".git/objects/d5/bd01648a96d50136b2a97c8bb9aa5b711f6c39": "b52bbb3aa77140bdf2d47814158cba7d",
".git/objects/d5/f1c8d34e7a88e3f88bea192c3a370d44689c3c": "2e5a4148dc9ebc15b186574d9fb60432",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/ff26ea56af225bf5019779451f9110f748433e": "cf7985aaddf4ca6ecdd35d1078369310",
".git/objects/d7/61c53178cc135119f252e047fb2f6e08512ed0": "54c64d1a96d272170806761ec67134b6",
".git/objects/d7/7259ea5b48093f76198b37a34e331989b98d39": "9e559b1162655a7e9c3503676309bb11",
".git/objects/d7/b35ec47b5814344571558da2e3204044eb909f": "7961957ef945c2f5d8d56ac245a2fe33",
".git/objects/d8/dd1e47e2ffac7f5bf3caa9a7863907bb110fea": "d773e46898264128be6a7aecb0241872",
".git/objects/d9/1bc59ffbb427417d260c53c0567f34c5fe5883": "d7be0d0d9de2b3380644bbb2d8bc80ee",
".git/objects/d9/8b2ab795119e7fd8b2e85dfd59dfa3721c5951": "e2c3b78598701bc83988486c88d1cb4d",
".git/objects/da/bf7c242e938c49fccd0cba88dc2fdccb2f65ee": "bbf7d12e4139b11a89628b8be2fcfda5",
".git/objects/db/150c6e3dc0f7eaaf0eba721a1efe272c2cf099": "12cf9194eee7191cb553ce2719f48818",
".git/objects/db/77bb4b7b0906d62b1847e87f15cdcacf6a4f29": "a2e10fc9c4f60ac00e2b9b1ed3a0b5ac",
".git/objects/db/d23409d3b0df0ef50c2cccbb32dadcc8a9304d": "7bba7f28c9134f225d3d1672d42863d1",
".git/objects/dc/139d85a93101cc0f6e9db03a3e1a9f68e8dd7e": "c815b8cd55031858470b95979194ad21",
".git/objects/dc/9ada4725e9b0ddb1deab583e5b5102493aa332": "e8022082c258e4c83e27519f77484618",
".git/objects/dd/683ca45209f8b889f26d0561df78a4f3318730": "6e32da08c42380111775ef657f64df14",
".git/objects/dd/db8a30c851e7ef5b16a9108934bd1217b6b43f": "e943b985c0fbc94ad354f2ada89b854d",
".git/objects/de/7c65b27ad4b131939154c41c4a08892f814067": "20f427be22e7f23f27becc7939030943",
".git/objects/df/0c1df511bb39af873925ecf0d74f2557d1c7a9": "b680152af4f1ed54060494fd7b0fc8fb",
".git/objects/df/f4f49561c816f70eaea557d889d31cf63447ac": "fccf1f0ce075ef8d3a1ae932cbc31552",
".git/objects/e0/d16fe56d6f12c217719dc2cd75545f44bfc973": "a45752aa781f95b86fe59cbf6f08ee9c",
".git/objects/e0/f0a47bc08f30b550b47b01de4c9206b6824dd9": "5ef61d56b6220833037adc3dc3871ecb",
".git/objects/e2/beb5af2db0053b9b018406c0e0406e4ecde624": "b68640ec8c062bffbf0f012c587ac1d2",
".git/objects/e2/d03cf928bc678e17cea2983322f53f08ddba94": "e91b4aced69008244ae5906680cde7b1",
".git/objects/e3/3142e71bfc751ce1d7a7d46406235425786005": "71cc9d64983f89c56658f9ade44a4809",
".git/objects/e5/155fe8e3391fc63c386e201e68570940ba7a7b": "15950f937565c7e202b51e97b2ca8710",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e7/1a16d23d05881b554326e645083799ab9bfc5e": "35049fca5b8153e0c0cd520b5503c269",
".git/objects/e7/c5c54370372a4cdde7288a32733998d87bd767": "37c17914ddc243c1c81881069106b916",
".git/objects/e8/04c742d5271e0923243598d37e58bf8ff4e0bd": "d565aadc9b3cf640f112863a7d22f4b5",
".git/objects/e8/8345f292a1cbd961e19e907a14c445620ed605": "4bcf1b609f2fdc2f6bf28f7d072cf881",
".git/objects/e8/a59023ee0c985a2671a3d600933f009a1edcc7": "a3a7a8db3dbdfdfc74de3cab1165d2a0",
".git/objects/e9/0e87ed69a7ebb8d965ec248fb86286423f103f": "4abcf8c77330fc7fd658318fc2374d78",
".git/objects/e9/f5fea27c705180eb716271f41b582e76dcbd90": "45a0061e76512ff597b88e29748f3ada",
".git/objects/ea/1493e82398b694d8d3e331d54baed09d51128e": "f2c93afa73b499387c59a7bf5976ebbd",
".git/objects/ea/e833d3468b76cdb820fef1567d8e9cfa02112c": "d1a9f4bd953294d1b4c002057bfa9290",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/37a4c905d0b2c969d8cf7391e744fe18fbc208": "257d2f4573bc6671badc092d15527f1b",
".git/objects/f0/505a96fd8643b8ade4548beaa8e0e0be686346": "8883685493d21b5f8aca56c885e02328",
".git/objects/f0/83318e09ca1b6b8484b1694a149f0c5d5cac1d": "541f4960a70ea9c895b2c21196ef40a7",
".git/objects/f1/6b586918ae57b838e8c23711d7ff36727d69ca": "75d81a07f217b8831742764c638708b6",
".git/objects/f2/4c7defe201c66049ca7ee3216d58dc759ff834": "bbfdb3d03fa1d63a876b949505077c0d",
".git/objects/f2/e259c7c9390ff69a6bbe1e0907e6dc366848e7": "094726a4a1cc307c0a019e65a323f850",
".git/objects/f3/46021e5e353f2f827b3a136a02d0f53631c785": "95dac5423c0c75a27b351527c71190cf",
".git/objects/f3/c28516fb38e64d88cfcf5fb1791175df078f2f": "bccf9d20d0adcc345fe8e5f4a745c4ae",
".git/objects/f5/8bb76100e82ec653e9b32a02d18d9232922d51": "e732ad2f094017daf1f16b50afd7c1d0",
".git/objects/f5/bf9fa0f536c285b8c0c2ef39b9714c66fae243": "828ed007bfe4ad61a0b9a49206f1148f",
".git/objects/f7/4085f3f6a2b995f8ad1f9ff7b2c46dc118a9e0": "c04177ec14f012cb2c99851a5e1ca941",
".git/objects/f8/0b00c0b4bc18cf1f58b2c7eac5fe30cee8ecbf": "569211ffd83da350d287d23cec0f6e95",
".git/objects/f8/532d76c3a34064ba229bb125e541760f631ea7": "85cb23da65b437709f2930ba64cf73e3",
".git/objects/f9/b0d7c5ea15f194be85eb6ee8e6721a87ff4644": "db1ee38473c66e5ffa9d28f6dfe66938",
".git/objects/fa/0168a54e690d08c72163f34daa484c50212f95": "0c8d1cac7857280d435e951485b7e6b4",
".git/objects/fc/ed99bced4701a6025ced978379273df47a37a8": "520cf80e74272c1b7df0a51daba9aad3",
".git/objects/fe/730945a01f64a61e2235dbe3f45b08f7729182": "1dfc0ae4480d18f6ff6e8730ef3222d1",
".git/objects/fe/9cc87580713c0f0238a4c887927ca8ee0df429": "dabdbad06cbcbc26cb39bdaf2e261a8a",
".git/ORIG_HEAD": "d1eca34919b995481a10ad5aafaba8a7",
".git/refs/heads/main": "8e33d4455ec32ed3ad2285e82a050f24",
".git/refs/remotes/origin/main": "8e33d4455ec32ed3ad2285e82a050f24",
".idea/libraries/Dart_SDK.xml": "cdba8f3e3c5176e9e0c8fd8ee16a7b83",
".idea/libraries/KotlinJavaRuntime.xml": "de38cfadca3106f8aff5ab15dd81692f",
".idea/modules.xml": "3867275a5e85f3eb0ad5db7870554b38",
".idea/runConfigurations/main_dart.xml": "0ecf958af289efc3fc1927aa27a8442f",
".idea/workspace.xml": "25155dfb2368a7e35e1ebbecd505a418",
"analysis_options.yaml": "5df212687f3997ccd1310b5b19ebfb78",
"android/app/build.gradle": "82e1082a11344477c108f1046a569fae",
"android/app/src/debug/AndroidManifest.xml": "2f12169bf3f0284894c0a7a8de4ea5ff",
"android/app/src/main/AndroidManifest.xml": "380ceb596b3652ab4147e0aae36010b8",
"android/app/src/main/java/io/flutter/plugins/GeneratedPluginRegistrant.java": "5b3b418ce50367c33bded3c0df06d47f",
"android/app/src/main/kotlin/com/example/web/MainActivity.kt": "12319e79b274dcb3e3c70d21fda2d252",
"android/app/src/main/res/drawable/launch_background.xml": "12c379b886cbd7e72cfee6060a0947d4",
"android/app/src/main/res/drawable-v21/launch_background.xml": "bff4b9cd8e98754261159601bd94abd3",
"android/app/src/main/res/mipmap-hdpi/ic_launcher.png": "13e9c72ec37fac220397aa819fa1ef2d",
"android/app/src/main/res/mipmap-mdpi/ic_launcher.png": "6270344430679711b81476e29878caa7",
"android/app/src/main/res/mipmap-xhdpi/ic_launcher.png": "a0a8db5985280b3679d99a820ae2db79",
"android/app/src/main/res/mipmap-xxhdpi/ic_launcher.png": "afe1b655b9f32da22f9a4301bb8e6ba8",
"android/app/src/main/res/mipmap-xxxhdpi/ic_launcher.png": "57838d52c318faff743130c3fcfae0c6",
"android/app/src/main/res/values/styles.xml": "f8b8cfbf977690d117f4dade5d27a789",
"android/app/src/main/res/values-night/styles.xml": "c22fb29c307f2a6ae4317b3a5e577688",
"android/app/src/profile/AndroidManifest.xml": "2f12169bf3f0284894c0a7a8de4ea5ff",
"android/build.gradle": "8fe56199271b6f4d45e5962cd8fea357",
"android/gradle/wrapper/gradle-wrapper.jar": "3ef954ed0adb79a5bd8a5303165fae05",
"android/gradle/wrapper/gradle-wrapper.properties": "1868e63ebbc541e5bbb09fa921ef2349",
"android/gradle.properties": "4b01dcf11166d04a1ee03bc0bac87b2a",
"android/gradlew": "7f1cd7eb3f75a1dc85cd37753972a6e2",
"android/gradlew.bat": "375ddea382b6c56a7be2a967a20e0ab5",
"android/local.properties": "dcc3f58c23a8da34b092039145018f49",
"android/settings.gradle": "b673a8efad7eaed18692f958a191f21a",
"android/web_android.iml": "273d851cbe25579b8e6ee48886fa4d6a",
"assets/AssetManifest.json": "1bcea4c45501d167b8cef0406248e027",
"assets/assets/hi.gif": "cad5918d86b6a7e83f1fb4acead70e4c",
"assets/assets/icons/facebook.png": "60ace5feac0e51ee2c7a12455a651d19",
"assets/assets/icons/github.png": "45ec5418b1d148a5d5e87c6b602a61b8",
"assets/assets/icons/linkedin.png": "1c05ef10267feb13f9e810cc017553bc",
"assets/assets/icons/upwork.png": "7eaf97253ccad85361adc5924a731925",
"assets/assets/icons/whatsapp.png": "b4d56762a4e79dac18e7033be6efb356",
"assets/assets/photos/image.png": "f18a7af6278e6be001dfd50e8c39e04c",
"assets/assets/projects/aiToolsB.png": "82bdd7ebff152fbee59a9edbecdd86cc",
"assets/assets/projects/coffee.png": "a4067d5c5a1b1c4f8ff3a7da6fb62553",
"assets/assets/projects/coffeeB.png": "e4fc90cff326e29a98f689b48018987a",
"assets/assets/projects/cricket.png": "bfd804af664ba85482e319c6fbf631bc",
"assets/assets/projects/cricketB.png": "7fb8128aa0a05ce4c49b77dba6e06994",
"assets/assets/projects/flutter.png": "0b5a2f8d3f4d173805affaf9f84f6c87",
"assets/assets/projects/laundryB.png": "6042606a34187f0d501adc6caf28a54e",
"assets/assets/projects/shoppingB.png": "e6d60e0874fdd7e9091c0a243564feeb",
"assets/assets/projects/tasks.png": "ab6160590459a405cb3cca604bc02918",
"assets/assets/projects/tasksB.png": "2bde7fe708ab83895a7b5d44eef382d5",
"assets/assets/services/app_dev.png": "ae4b7802fc17a6f496039f05d4ae21e5",
"assets/assets/services/desktop_dev.png": "09476d8b4fd2ebe03bfbcffbf5b2ca55",
"assets/assets/services/fiverr.png": "9d4018924e1f0e983a86e7eaf8a0958b",
"assets/assets/services/open.png": "4a5996597d32b06d91183f0860c29aab",
"assets/assets/services/open_b.png": "b65517dd1a07922b014409bb8dcb1e81",
"assets/assets/services/prototype.png": "8e0161f95abd3415fc14b7eab2b01a9a",
"assets/assets/services/ui-design.png": "57c12633e76d50f598fc4e0077b25333",
"assets/assets/services/web_app.png": "af59c808ad37ba12f05f3c2dd15bce86",
"assets/data.json": "09dfc9eb55819e52c3dc74b0f114dae8",
"assets/FontManifest.json": "eb13a0d169d41e78994c5d6eb9075409",
"assets/fonts/agustina/agustina.otf": "7b9833076716a8d14eec0cf885a3153c",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/fonts/montserrat/montserrat.ttf": "ee6539921d713482b8ccd4d0d23961bb",
"assets/fonts/poppins/Poppins-Bold.ttf": "a3e0b5f427803a187c1b62c5919196aa",
"assets/fonts/poppins/Poppins-Italic.ttf": "5e956c44060a7b3c0e39819ae390ab15",
"assets/fonts/poppins/Poppins-Light.ttf": "f6ea751e936ade6edcd03a26b8153b4a",
"assets/fonts/poppins/Poppins-Medium.ttf": "f61a4eb27371b7453bf5b12ab3648b9e",
"assets/fonts/poppins/Poppins-Regular.ttf": "8b6af8e5e8324edfd77af8b3b35d7f9c",
"assets/fonts/poppins/Poppins-SemiBold.ttf": "4cdacb8f89d588d69e8570edcbe49507",
"assets/NOTICES": "70b0f9962356cb98157cde694767a789",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_AMS-Regular.ttf": "657a5353a553777e270827bd1630e467",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Bold.ttf": "a9c8e437146ef63fcd6fae7cf65ca859",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Regular.ttf": "7ec92adfa4fe03eb8e9bfb60813df1fa",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Bold.ttf": "46b41c4de7a936d099575185a94855c4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Regular.ttf": "dede6f2c7dad4402fa205644391b3a94",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Bold.ttf": "9eef86c1f9efa78ab93d41a0551948f7",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-BoldItalic.ttf": "e3c361ea8d1c215805439ce0941a1c8d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Italic.ttf": "ac3b1882325add4f148f05db8cafd401",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Regular.ttf": "5a5766c715ee765aa1398997643f1589",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-BoldItalic.ttf": "946a26954ab7fbd7ea78df07795a6cbc",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-Italic.ttf": "a7732ecb5840a15be39e1eda377bc21d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Bold.ttf": "ad0a28f28f736cf4c121bcb0e719b88a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Italic.ttf": "d89b80e7bdd57d238eeaa80ed9a1013a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Regular.ttf": "b5f967ed9e4933f1c3165a12fe3436df",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Script-Regular.ttf": "55d2dcd4778875a53ff09320a85a5296",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size1-Regular.ttf": "1e6a3368d660edc3a2fbbe72edfeaa85",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size2-Regular.ttf": "959972785387fe35f7d47dbfb0385bc4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size3-Regular.ttf": "e87212c26bb86c21eb028aba2ac53ec3",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size4-Regular.ttf": "85554307b465da7eb785fd3ce52ad282",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Typewriter-Regular.ttf": "87f56927f1ba726ce0591955c8b3b42d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "99f29024aee8f4672a47cc3a81b9b84a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "48ce1bb8a42776caa951cb782d277730",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "d8e9b6203ce2657c991f0b339ccb3a6d",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.ico": "c3886bba6e6d2e775d1a142261a4aa11",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"icons/Icon-192.ico": "c3886bba6e6d2e775d1a142261a4aa11",
"icons/Icon-512.ico": "c3886bba6e6d2e775d1a142261a4aa11",
"index.html": "3670b399f8b9d34e52caec1d046985a0",
"/": "335164e8806748fe9331a29f4c17832e",
"ios/Flutter/AppFrameworkInfo.plist": "d82fc62dcd081e420f43e71a31460b73",
"ios/Flutter/Debug.xcconfig": "e2f44c1946b223a1ce15cefc6ba9ad67",
"ios/Flutter/flutter_export_environment.sh": "40ad410efb81cdc6ec82fe504aba7996",
"ios/Flutter/Generated.xcconfig": "6c303e50b96b1e41217d275e6663c4c1",
"ios/Flutter/Release.xcconfig": "e2f44c1946b223a1ce15cefc6ba9ad67",
"ios/Runner/AppDelegate.swift": "b431e1eaead2cfc3718b75ba2c5f45aa",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Contents.json": "31a08e429403e265cabfb31b3d65f049",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-1024x1024@1x.png": "c785f8932297af4acd5f5ccb7630f01c",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-20x20@1x.png": "a2f8558fb1d42514111fbbb19fb67314",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-20x20@2x.png": "2247a840b6ee72b8a069208af170e5b1",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-20x20@3x.png": "1b3b1538136316263c7092951e923e9d",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-29x29@1x.png": "be8887071dd7ec39cb754d236aa9584f",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-29x29@2x.png": "043119ef4faa026ff82bd03f241e5338",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-29x29@3x.png": "2b1452c4c1bda6177b4fbbb832df217f",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-40x40@1x.png": "2247a840b6ee72b8a069208af170e5b1",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-40x40@2x.png": "8245359312aea1b0d2412f79a07b0ca5",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-40x40@3x.png": "5b3c0902200ce596e9848f22e1f0fe0e",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-60x60@2x.png": "5b3c0902200ce596e9848f22e1f0fe0e",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-60x60@3x.png": "e419d22a37bc40ba185aca1acb6d4ac6",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-76x76@1x.png": "36c0d7a7132bdde18898ffdfcfcdc4d2",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-76x76@2x.png": "643842917530acf4c5159ae851b0baf2",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-83.5x83.5@2x.png": "665cb5e3c5729da6d639d26eff47a503",
"ios/Runner/Assets.xcassets/LaunchImage.imageset/Contents.json": "b9e927ac17345f2d5f052fe68a3487f9",
"ios/Runner/Assets.xcassets/LaunchImage.imageset/LaunchImage.png": "978c1bee49d7ad5fc1a4d81099b13e18",
"ios/Runner/Assets.xcassets/LaunchImage.imageset/LaunchImage@2x.png": "978c1bee49d7ad5fc1a4d81099b13e18",
"ios/Runner/Assets.xcassets/LaunchImage.imageset/LaunchImage@3x.png": "978c1bee49d7ad5fc1a4d81099b13e18",
"ios/Runner/Assets.xcassets/LaunchImage.imageset/README.md": "f7ee1b402881509d197f34963e569927",
"ios/Runner/Base.lproj/LaunchScreen.storyboard": "b428258a72232cdd2cc04136ec23e656",
"ios/Runner/Base.lproj/Main.storyboard": "2b4e6b099f6729340a5ecc272c06cff7",
"ios/Runner/GeneratedPluginRegistrant.h": "decb9041b5e91a07e66f4664e5dac408",
"ios/Runner/GeneratedPluginRegistrant.m": "f6079b630997f8fd4ae1ac639162419a",
"ios/Runner/Info.plist": "1c8d594d1e9b5141a0a4454384813044",
"ios/Runner/Runner-Bridging-Header.h": "7ad7b5cea096132de13ba526b2b9efbe",
"ios/Runner.xcodeproj/project.pbxproj": "9b5005463c6b5ccc42da2ba69b6300b1",
"ios/Runner.xcodeproj/project.xcworkspace/contents.xcworkspacedata": "77d69f353bbf342ad71a24f69ec331ff",
"ios/Runner.xcodeproj/project.xcworkspace/xcshareddata/IDEWorkspaceChecks.plist": "7e8ed88ea03cf8357fe1c73ae979f345",
"ios/Runner.xcodeproj/project.xcworkspace/xcshareddata/WorkspaceSettings.xcsettings": "ecb41062214c654f65e47faa71e6b52e",
"ios/Runner.xcodeproj/xcshareddata/xcschemes/Runner.xcscheme": "7721d249fd3216036344543336caee67",
"ios/Runner.xcworkspace/contents.xcworkspacedata": "ac9a90958f80f9cc1d0d5301144fb629",
"ios/Runner.xcworkspace/xcshareddata/IDEWorkspaceChecks.plist": "7e8ed88ea03cf8357fe1c73ae979f345",
"ios/Runner.xcworkspace/xcshareddata/WorkspaceSettings.xcsettings": "ecb41062214c654f65e47faa71e6b52e",
"lib/main.dart": "ae762add294346fa6a4cf193d30dd8bd",
"linux/CMakeLists.txt": "c37d213e8f5724a4bd3e2c04cc752528",
"linux/flutter/CMakeLists.txt": "2195470ce31675d31db5a37590d011f6",
"linux/flutter/generated_plugins.cmake": "e973b0a9c4bf1b7cba923da57b4fbf45",
"linux/flutter/generated_plugin_registrant.cc": "d07afe003d5837167bdd357d593f20a0",
"linux/flutter/generated_plugin_registrant.h": "d295462c9da9f7fef22dc86c34492318",
"linux/main.cc": "539395bcd63dba20afed0838d136189f",
"linux/my_application.cc": "595fe499c61799cb6f43a9afffeaa255",
"linux/my_application.h": "f6b37d58752c8671078b6f660e33e8c1",
"macos/Flutter/ephemeral/Flutter-Generated.xcconfig": "0ea15633ef53390ff98bb440ffefc4fb",
"macos/Flutter/ephemeral/flutter_export_environment.sh": "b5d967d2bb1230a1ba0434db70081d80",
"macos/Flutter/Flutter-Debug.xcconfig": "f6991d7432e1664af118cc9531127016",
"macos/Flutter/Flutter-Release.xcconfig": "f6991d7432e1664af118cc9531127016",
"macos/Flutter/GeneratedPluginRegistrant.swift": "c840bc53b61279c2fb631741134c2ed7",
"macos/Runner/AppDelegate.swift": "f35757566ef1832592cec47b89197f94",
"macos/Runner/Assets.xcassets/AppIcon.appiconset/app_icon_1024.png": "c9becc9105f8cabce934d20c7bfb6aac",
"macos/Runner/Assets.xcassets/AppIcon.appiconset/app_icon_128.png": "3ded30823804caaa5ccc944067c54a36",
"macos/Runner/Assets.xcassets/AppIcon.appiconset/app_icon_16.png": "8bf511604bc6ed0a6aeb380c5113fdcf",
"macos/Runner/Assets.xcassets/AppIcon.appiconset/app_icon_256.png": "dfe2c93d1536ae02f085cc63faa3430e",
"macos/Runner/Assets.xcassets/AppIcon.appiconset/app_icon_32.png": "8e0ae58e362a6636bdfccbc04da2c58c",
"macos/Runner/Assets.xcassets/AppIcon.appiconset/app_icon_512.png": "0ad44039155424738917502c69667699",
"macos/Runner/Assets.xcassets/AppIcon.appiconset/app_icon_64.png": "04e7b6ef05346c70b663ca1d97de3ad5",
"macos/Runner/Assets.xcassets/AppIcon.appiconset/Contents.json": "1d48e925145d4b573a3b5d7960a1c585",
"macos/Runner/Base.lproj/MainMenu.xib": "85bdf02ea39336686f2e0ff5f52137cc",
"macos/Runner/Configs/AppInfo.xcconfig": "de6e5e62462d684e738ac2ecb25768f4",
"macos/Runner/Configs/Debug.xcconfig": "783e2b0e2aa72d8bc215462bb8d1569d",
"macos/Runner/Configs/Release.xcconfig": "709485d8ea7b78479bf23eb64281287d",
"macos/Runner/Configs/Warnings.xcconfig": "bbde97fb62099b5b9879fb2ffeb1a0a0",
"macos/Runner/DebugProfile.entitlements": "4ad77e84621dc5735c16180a0934fcde",
"macos/Runner/Info.plist": "9ffcbec0a18fdad9d3d606656fd46f9a",
"macos/Runner/MainFlutterWindow.swift": "25da60ddd7c7148c2a40dc3194b8ddca",
"macos/Runner/Release.entitlements": "fc4ad575c1efec3d097fb9d40a0f702f",
"macos/Runner.xcodeproj/project.pbxproj": "35fe0c0b36d3f3e1b20ebc88bbb895b2",
"macos/Runner.xcodeproj/project.xcworkspace/xcshareddata/IDEWorkspaceChecks.plist": "7e8ed88ea03cf8357fe1c73ae979f345",
"macos/Runner.xcodeproj/xcshareddata/xcschemes/Runner.xcscheme": "4749fc9064b9a190d4b014ea79dcae5e",
"macos/Runner.xcworkspace/contents.xcworkspacedata": "ac9a90958f80f9cc1d0d5301144fb629",
"macos/Runner.xcworkspace/xcshareddata/IDEWorkspaceChecks.plist": "7e8ed88ea03cf8357fe1c73ae979f345",
"main.dart.js": "438ca68e12b68ea6b88c94a5cfe578eb",
"manifest.json": "c63bc2deda62512348ed2b5a47c76850",
"pubspec.lock": "ea2bc4ee7419a1005fd7a532353f2826",
"pubspec.yaml": "c5eac20aff1b9264f11a5fb7a94462b6",
"README.md": "f62eeaa7616cee091b7df40146427806",
"test/widget_test.dart": "32cade57813a89c74d8d3a269232f36e",
"version.json": "a29e8b22a08aa0274b027931eec216c4",
"web/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"web/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"web/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"web/icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"web/icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"web/index.html": "335164e8806748fe9331a29f4c17832e",
"web/manifest.json": "823103f6f53bde6d5ba3d05b2a4ab6b0",
"web.iml": "f9bf5c490675c84d098e6772a6f2a796",
"windows/CMakeLists.txt": "e0f434edeccda0dca49269f1e0a167b2",
"windows/flutter/CMakeLists.txt": "82c70875775d10a82c7e2c3e9453a26d",
"windows/flutter/generated_plugins.cmake": "620906318e8c8297f3bc95b445ce4c47",
"windows/flutter/generated_plugin_registrant.cc": "a8f91348d8d9090f22ec69d597c41e1f",
"windows/flutter/generated_plugin_registrant.h": "0ea33875f9f8e118f9c2ded03e2e2835",
"windows/runner/CMakeLists.txt": "028602ab9754bffe716659ada7590d29",
"windows/runner/flutter_window.cpp": "9a0919fae6ddd9ffd2d7bae0e946b01e",
"windows/runner/flutter_window.h": "7defcc89d4a26d56e801241d624d48fb",
"windows/runner/main.cpp": "01bb7d9acfab1af72f17ad947706bf4f",
"windows/runner/resource.h": "1ade5dd15e613479a15e8832ed276f2b",
"windows/runner/resources/app_icon.ico": "6ea04d80ca2a3fa92c7717c3c44ccc19",
"windows/runner/runner.exe.manifest": "cd3aafe81b2f278dffaf305373ee30b4",
"windows/runner/Runner.rc": "0ca94727bc4bc6c162a05f0c5c06ad66",
"windows/runner/utils.cpp": "892a92c75eb6291ca11f62b44ea4d16b",
"windows/runner/utils.h": "fd81e143f5614eb6fd75efe539002853",
"windows/runner/win32_window.cpp": "7f39d74c653ac062929cf828a595eab1",
"windows/runner/win32_window.h": "30adb9dcb18f5cad39278e6bb44d42a7"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
