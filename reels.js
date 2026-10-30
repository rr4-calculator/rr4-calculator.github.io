// Данные катушек: таблица «КАТУШКИ Potryasov Game», обновление от 22.05.2026.
// Формат строки: Название;Передаточное число;Подмотка за оборот (м). Пусто = нет данных, * = замер игрока.
const CAT_RAW=`#Безынерционные 30000
Furia 30000;4,6;1,72
Furia 30000 8-Anniversary;4,6;1,72
Turion SW 30000;4,4;1,56
Turion SW 30000 7-Years;4,4;1,56
Venga II 30000;5,1;1,83
Venga II 30000 Super 9;5,1;1,83
Venga II 30000 First Edition;4,8;1,72
Goliaf 30000;5,8;1,98
#Безынерционные 20000
Furia 20000;4,9;1,51
Turion SW 20000;4,4;1,30
Goliaf 20000;5,8;1,64
#Безынерционные 10000
Venga 10000;5,1;1,23
Venga II 10000;5,0;1,22
Venga II 10000 Super 9;5,0;1,22
Venga II 10000 Final;5,1;1,23
Venga Classic 10000;5,1;1,23
Venga 10000 6-Anniversary;4,9;1,2
Admiral II 10000S;4,1;1,06
Admiral II 10000S Superior;4,6;1,17
Tagara II 10000;4,3;1,25
Tagara 10000;4,2;1,02
Tagara II 10000 8-Anniversary;4,2;1,22
#Безынерционные 8000
Turion SW 8000;5,6;1,05
Venga II 8000 SHS;6,1;1,17
Venga 8000;6,0;1,14
Megara 8000;4,7;1,13
Overlord 88;4,5;1,05
Bestia II 8000 SHS;6,4;1,34
Bestia 8000;5,2;1,04
Admiral 8000s;4,8;0,94
Admiral II 8000S;4,8;1,01
Tagara II 8000;4,5;1,05
Tagara 8000;4,7;0,89
Silver 80;4,3;0,98
Everest-24 8000s;4,7;0,67
Everest II 8000s;3,6;0,58
Everest III 8000S;4,4;0,91
SG8000 Ultra Power;5,7;1,26
SG8000 Ultra Power Emerald;5,7;1,26
Evia 8000;4,7;1,13
Hunter 80S;4,7;1,04
Hunter 80S 9-Years;4,7;1,04
Natora 8000;5,3;1,05
Natora 8000 Super Seven;4,8;0,94
Velara 8000;4,6;0,97
Velara 8000 Mystique;4,6;0,97
Caliber 80 SLC;4,2;1,03
Model 827;4,0;0,81
Caliber HSV 80 SLC Raven;4,5;1,1
Narga 8000 Super 7;4,6;0,87
Narga 8000;4,3;0,82
Caliber HSV 80 SLC;4,7;1,15
Alfa 8000;5,2;0,91
Alfa 8000 Celestia;5,2;0,91
Gold 80s;5,7;0,88
Titan 8000;4,3;1,03
#Безынерционные 6000
Venga II 6000;5,7;0,89
Venga Classic 6000;5,5;0,84
Venga 6000;5,5;0,84
Admiral II 6000S;5,2;0,8
Admiral II 6000S Superior;5,3;0,84
Admiral 6000s;5,0;0,77
Chronica II 6000;4,2;0,68
Chronica II 6000 Super 8;4,2;0,68
Bestia II 6000 SHS;6,8;1,1
Bestia 6000;5,6;0,88
Major ltd 2 6000s;4,3;0,64
Olaf SP 60;5,1;0,83
P-Series 2 GS 60S;3,8;0,54
Chronica 6000;3,8;0,60
Azimut 6000;5,4;0,83
Tagara II 6000;5,4;1,01
Overlord 656;4,3;0,75
Tagara 6000;5,6;0,86
Tagara 6000 Super 8;5,1;0,78
Z-Series 2 60S;4,3;0,61
Full Metal 60;4,5;0,7
Everest II 6000s;4,3;0,59
Evia 6000;4,9;0,94
Everest III 6000S;4,7;0,77
Hunter 60S;4,8;0,79
Hunter 60S 9-Years;4,8;0,79
Horizon III 6000S;4,6;0,74
Commandor GS 60S;4,8;0,65
Natora 6000;5,6;0,88
Natora 6000 Supercarp;5,6;0,88
Velara 6000;5,1;0,83
Velara 6000 Mystique;5,1;0,83
Narga 6000;4,6;0,71
Commandor 2 60S;4,8;0,68
Alfa 6000;5,4;0,81
Gold 60s;5,7;0,78
Pulsar 6000;5,4;0,78
Sabre 60s;4,8;0,67
Super Cast 6000s;4,8;0,87
Proton 6000;4,8;0,68
Pride 6000S;5,0;0,75
Adriatica 5000S;5,4;0,78
#Безынерционные 4000
Bestia 4000;6,2;0,74
Admiral 4000s;6,2;0,74
Admiral II 4000S;6,1;0,72
Tagara 4000;6,2;0,72
P-Series 2 GS 40S;5,1;0,63
Azimut 4000;5,8;0,71
Z-Series 2 40S;5,1;0,62
Major ltd 2 4000s;6,2;0,74
Everest III 4000S;5,1;0,64
Major 2 4000s;5,4;0,64
Hunter 40S;6,8;0,83
Everest II 4000s;4,3;0,51
Commandor GS 40S;4,0;0,47
Natora 4000;6,2;0,74
Conquest II 4000s;5,2;0,62
Commandor 2 40S;5,8;0,69
Narga 4000;5,2;0,62
Bird 2 GSX 40S;5,1;0,59
Alfa 4000;5,8;0,68
Model De Luxe 430S;3,8;0,44
Sabre 40s;5,0;0,63
Pulsar 4000;5,8;0,68
Hercules G2 40s;5,0;0,64
Element PRO 4000;5,2;0,62
Dragon 40s;5,0;0,61
Lacerti-SX NG 4000;5,7;0,69
Lacerti NG 4000;6,1;0,71
#Безынерционные 3000
Aviator SP 3000 XHS;7,1;0,75
Bestia II 3000 SHS;7,0;0,79
Bestia 3000;6,2;0,66
Olaf SP 30;6,2;0,71
Tagara II 3000 SHS;6,8;0,76
P-Series 2 GS 30S;5,8;0,68
Mayor III 3000S;6,1;0,69
Mayor III 3000S 9 Years;6,1;0,69
Natora 3000;6,2;0,66
Velara 3000;5,9;0,65
Horizon III 3000S;5,7;0,68
Horizon III 3000S 9-Anniversary;5,9;0,7
Commandor 2 30S;5,8;0,62
Gold 30s;6,2;0,69
Bird 2 GS 30S;5,1;0,53
Meteor 30s;6,0;0,65
Hydra G2 30s;5,0;0,52
Lagoon 3000S;6,1;0,76
Spark 2 3000S;5,4;0,54
#Безынерционные 2000
Aviator SP 2000 XHS;7,2;0,69
Bestia II 2000 SHS;7,1;0,72
Overlord 3RS 20S;5,1;0,51
JSX Inferno 20S;6,2;0,62
Major III 2000S;6,6;0,59
Olaf SP 20;6,2;0,58
Natora 2000;6,2;0,62
Commandor 2 20S;5,8;0,52
Horizon III 2000S;5,9;0,59
Pelengas;4,2;0,42
Pelengas 2017;4,9;0,49
Pelengas 2025;5,7;0,56
Pelengas 2026;5,9;0,58
Hercules G2 20s;5,0;0,56
Element PRO 2000;5,4;0,5
Vyatka-2;4,7;0,47
Hydra Smart 2 25s;5,0;0,49
Spark 2 2000S;5,4;0,48
#Безынерционные 1000
Aviator SP 1000 XHS;7,3;0,62
Aviator SP 1000 XHS 9-Years;7,5;0,64
Bestia II 1000 SHS;7,1;0,62
Overlord 3RS 10S;5,9;0,56
JSX Inferno 10S;6,2;0,58
Major III 1000S;6,8;0,6
Olaf SP 10;6,4;0,55
Fisher MT10;5,1;0,5
Velara 1000;5,8;0,52
Corsair 10S;6,2;0,58
Horizon III 1000S;5,9;0,52
Alfa 1000;5,8;0,48
#Байткастинговые классические
Minister CS ES60;4,7;0,49
Minister Phantom;6,3;0,7
Phantom Super LWC20;8,1;0,88
Rocket Jet SG80;3,9;0,56
Rocket Jet SG80 Desert sand;3,9;0,56
Rocket Jet SG70;4,2;0,51
Rocket Jet RJ7;4,1;0,5
Centauri ZC80;4,7;0,57
Centauri ZC70;4,7;0,57
Classic SG70;4,1;0,5
Monster LD60;5,1;0,55
Minister NGT LD60;5,1;0,54
Minister NGT LD50;5,3;0,56
Minister CS LD60;5,1;0,53
Minister CS PG60;3,8;0,4
Minister CS SR60;5,1;0,53
Minister CS SG60;5,1;0,53
Minister CS 60;5,1;0,53
Minister CS 60 NY26;5,1;0,53
Spear SG70;4,1;0,5
Ranger Z70;4,1;0,5
Steelness ZMS60;5,3;0,55
Imperial R605;4,4;0,42
Imperial R605 6-Anniversary;4,3;0,42
Imperial R605 El, Mag, RG;4,3;0,42
Steelness ZMS50;6,8;0,71
SAL5000;5,3;0,55
Ranger Z60;5,3;0,55
Billionare HV 60R;5,1;0,57
Billionare HV 60R NYE;5,1;0,57
ZM-4 Z60;6,3;0,66
ZM-4 Z-60 8-Years;6,1;0,64
ZM-4 Z50;6,3;0,66
ZM-4 Z40;6,3;0,66
ZM-4 Z-40 8-Years;7,1;0,74
Billionare 60R;5,1;0,57
Billionare 50R;5,1;0,57
ZM-3 Z-60;5,3;0,55
ZM-3 Z-50;5,3;0,55
ZM-3 Z-40;5,3;0,55
SteelHead 600-R;5,1;0,56
SteelHead 500-R;5,1;0,56
Minister 2000;4,5;0,5
Black Box ZBB60;5,9;0,62
Black Box ZBB50;5,9;0,62
Compact ZC60;5,3;0,56
Compact ZC50;5,3;0,56
Compact ZC40;5,3;0,56
Zodiac 500-R2;5,1;0,57
Spider 400-R2;5,1;0,57
Magellan 400;5,2;0,59
Winner Round II;5,1;0,57
#Силовые мультипликаторы
Electro Raptor 40;2,4;
Electro Raptor 40 7-Years;2,4;
Electro Raptor 40 9-Years;2,4;
Electro Raptor 40 Dragon Edit.;2,4;
Electro Raptor 40 FT;2,4;
Electro Raptor 20;3,2;0,607*
Electro Raptor 20 7-Years;3,2;0,607*
Electro Raptor 20 9-Years;3,2;0,607*
Electro Raptor 20 Dragon Edit.;3,2;0,607*
Electro Raptor 20 FT;3,2;0,607*
#Байткастинговые низкопрофильные
Jet-Series ULX;7,1;0,74
JSX Inferno;8,0;0,82
Jet-Series JSXHS-R;7,9;0,81
Jet-Series JSX-R;7,1;0,72
Polestar ELT;7,1;0,71
Skipper LP-R HS;7,8;0,93
Magma XHS-LP;8,1;0,86
Magma XHS-LP 9-Years;8,3;0,88
Jet-Bullet;10,1;1,01
Olaf HS-LP;7,1;0,79
Jet-Series JSGHS-R;7,1;0,71
Jet-Series JSG-R;6,4;0,65
Pillar 2 TPC-R-HS;7,8;0,91
Pillar 2 TPC-R;7,1;0,85
Zero GS ZG-R;7,1;0,67
Mayor 2 TMC-R;6,4;0,78
Jet-Series JS-R;6,4;0,63
Zero 2 ZR;7,1;0,69
Zero 2 ZHS-R;6,4;0,62
Alfa Pro LP;6,6;0,66
Pro Bird 2;7,1;0,68
Spectrum;7,1;0,86
Silver Bird 2;6,4;0,61
Charger 2;7,1;0,81
T-Tech STT-HSR;7,3;0,86
T-Tech STT-R;5,4;0,64
Nitro 2;6,4;0,73
Thunderbolt;7,3;0,87
SportPro X2;6,6;0,8
Black Bird 2;6,4;0,6
Riva 2;6,6;0,76
Energy;6,2;0,73
Optimus;6,2;0,73
Winner NG LP-HS;6,3;0,75
Profisher;6,2;0,7`;
const NODATA_RAW=`#Безынерционные 10000
Turion SW 10000;4,9;
Furia 10000;4,6;
Furia 10000 SHS;6,2;
Goliaf 10000;4,9;
Olaf Stark SP-SWG 100;4,9;
Azimut 10000;5,4;
Azimut 10K-7Y;5,4;
#Безынерционные 8000
Azimut 8000;5,4;
#Безынерционные 4000
Horizon 2 4000s;5,0;
Proton 4000;5,1;
Pride 4000S;5,2;
Element 4000;5,2;
Lagoon-HP 4000S;5,2;
#Безынерционные 3000
Z-Series 2 30S;5,8;
Major ltd 2 3000s;5,2;
Corsair 30S;6,2;
Bird 2 GSX 30S;5,1;
Mosquito 2 3000s;5,2;
Horizon 2 3000s;5,2;
Pegasus 30s;5,0;
Dragon 30s;5,0;
Element PRO 3000;5,4;
Adriatica 3000S;6,1;
Element 3000;5,4;
Libra / Libra 2 3000S;5,4;
#Безынерционные 2000
Overlord 3GS 20S;5,1;
JSX 20S;6,2;
Bestia 2000;6,2;
Overlord 3BS 20S;5,7;
P-Series 2 GS 20S;5,1;
Admiral 2000s;6,2;
Z-Series 2 20S;5,1;
Overlord 3B 20S;5,3;
Overlord 3 20S;5,1;
Major 2 2000s;5,2;
Overlord 3 20S 8-Years;6,1;
Corsair 20S;6,2;
Narga 2000;5,6;
Conquest II 2000s;5,2;
Bird 2 GSX 20S;5,2;
Alfa 2000;5,8;
Bird 2 20S;5,1;
Horizon 2 2000s;5,2;
Pulsar 2000;5,8;
Sirius 20S;5,4;
Proton 2000;5,2;
Pride 2000S;5,6;
Element 2000;5,4;
Lagoon-HP 2 2000S;5,6;
Hydra Smart 25s;5,0;
Libra 2 2000S;5,4;
#Безынерционные 1000
Overlord 3GS 10S;5,7;
JSX 10S;6,2;
Overlord 3BS 10S;5,9;
Bestia 1000;5,2;
P-Series 2 GS 10S;5,2;
Overlord 3E 10S;5,9;
Admiral 1000s;5,2;
Z-Series 2 10S;5,2;
Overlord 3B 10S;5,7;
Overlord 3 10S;5,3;
Overlord 3 10S 8-Years;6,1;
Natora 1000;5,2;
Bird 2 GSX 10S;5,2;
Bird 2 GS 10S;5,2;
EasySpin 1000s;5,2;
Pegasus 10s;5,0;
Element PRO 1000;5,4;
Element 1000;5,4;
Lagoon 1000S;6,1;
#Байткастинговые классические
Classic SG70 6 Years;4,5;
Minister CS 60 6 Years;5,3;
Castmaster LGR1973;3,2;
#Силовые мультипликаторы
Borealica 40 DS;4,0 | 1,6;
Borealica 40 DS 6 Anniversary;4,0 | 1,6;
Borealica 30 DS;4,0 | 1,7;
Borealica 30 DS 6 Anniversary;4,0 | 1,7;
Imperial C40 2S;4,6 | 1,6;
Imperial C40 2S 6 Anniversary;4,4 | 1,5;
Borealica 20 DS;5,0 | 1,7;
Triumph 30 2S;3,8 | 1,7;
Triumph 30 2S 8-Anniversary;4,0 | 1,8;
Triumph 20 2S;3,8 | 1,7;
Triumph 10 2S;4,7 | 2,1;
Venga C 40 2S;4,8 | 1,6;
Venga C 40 2S 9-Anniversary;5,3 | 1,7;
Venga C 30 2S;5,3 | 1,6;
Venga C 20 2S;6,0 | 2,3;
Albacore 40 DS;5,2 | 2,3;
Albacore 20;5,7;
Taiga 40 2S;4,3 | 1,8;
California 40;2,4;
Taiga 20 2S;4,3 | 1,8;
Tongar 2Gen 30 DS;5,4 | 2,4;
Tongar 30 DS;5,0 | 2,0;
Tongar 2Gen 20 DS;5,7 | 2,6;
Tongar 20 DS;5,0 | 2,0;
Tongar 2Gen 20;6,4;
Tongar 20;5,0;
Tera L-LD 40;4,3;
Tera L-LD 30;5,1;
Tera L-LD 20;6,1;
Tera C-LW 40;4,0;
Tera C-LW 30;4,9;
Tera C-LW 20;4,9;
Cardinal 30 2S;3,8 | 1,7;
Cardinal 30;3,5;
Cardinal 20 2S;3,8 | 1,7;
Cardinal 20;3,5;
Cardinal 10;6,0;
Palomar 30;6,2;
Palomar 20;6,2;
Palomar 10;6,2;
Billionare 30 MS;4,2 | 2,1;
Billionare 20;5,1;
Billionare 10;5,1;
Taiga C 40;2,9;
Taiga C 30;3,3;
Taiga C 30 2S 7-Anniversary;4,2 | 2,0;
Taiga C 20;4,0;
Rigal 20 2S;6,4 | 3,8;
Oriental 30;5,2;
Oriental Noble F30;4,9;
Oriental 20;5,2;
Oriental Noble F20;7,1;
SteelHead C-30;4,8;
SteelHead C-20;4,8;
SteelHead C-10;4,8;
Argus 30;4,2;
Argus 20;4,2;
Argus 10;4,2;
Halibut 20 2S;6,4 | 3,8;
Halibut 20;6,4;
Isinga 30;3,9;
Isinga 20;5,1;
Isinga 10;5,1;
Altitude 20;4,7;
Altitude 10;5,1;
Hamra C-LW 30;2,8;
Hamra C-LW 20;3,2;
Hamra C-LW 10;3,4;
Seagull 30;6,2;
Seagull 20;6,2;
Narga 30;3,9;
Narga 20;5,1;
Narga 10;5,1;
Simplex 400;3,8;
Simplex 300;3,8;
Simplex 200;5,1;
Zodiac С-20;5,1;
Zodiac С-10;5,1;
Winner Trolling 30;4,3;
Winner Trolling 20;5,1;
Winner Trolling 10;5,1;
`;
