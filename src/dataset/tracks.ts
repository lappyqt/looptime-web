import type { Track } from '../entities/track';
const baseUrl = import.meta.env.BASE_URL; 

export const tracksDataset: Track[] = [
    {
        id: 1,
        name: 'SILVERSTONE',
        country: 'UNITED KINDOM',
        distance: 5.891,
        eventsCount: 1,
        imageUrl: `${baseUrl}/circuits/conf_path/Silverstone.svg`,
        series: ['f1'],
        circuitPathUrl: `${baseUrl}/circuits/conf_path/Silverstone.svg`,
        circuitCornersUrl: `${baseUrl}/circuits/conf_corners/Silverstone.svg`,
        descriptionPhotoUrl: '',
        description: 'Автодром Сильверстоун (Silverstone Circuit) — легендарный «дом британского автоспорта», расположенный на базе бывшего военного аэродрома времен Второй мировой войны. Трасса навсегда вошла в историю, приняв самый первый Гран-при Формулы-1 в 1950 году. Сегодня это высокоскоростной трек длиной 5,9 км, знаменитый своими сложнейшими связками поворотов Maggotts и Becketts, где гонщики проверяют на прочность технику и собственную выносливость.',
        coordinates: '52°04′16″N 1°00′58″W',
        openedInYear: 1948,
        lapRecordTime: '1:27.097',
        turnsCount: 18,
        grandstandCapacity: 175000,
        galleryUrls: [
            `${baseUrl}/trackPhotogallery/silverstone/image1.avif`,
            `${baseUrl}/trackPhotogallery/silverstone/image2.avif`,
            `${baseUrl}/trackPhotogallery/silverstone/image3.avif`,
            `${baseUrl}/trackPhotogallery/silverstone/image4.webp`,
        ]
    },
    {
        id: 2,
        name: 'SPA-FRANCORCHAMPS',
        country: 'BELGUIM',
        distance: 7.004,
        eventsCount: 3,
        imageUrl: `${baseUrl}/circuits/conf_path/Spa.svg`,
        series: ['gt', 'f1', 'wec'],
        circuitPathUrl: `${baseUrl}/circuits/conf_path/Spa.svg`,
        circuitCornersUrl: `${baseUrl}/circuits/conf_corners/Spa.svg`,
        descriptionPhotoUrl: '',
        description: 'Спа-Франкоршам — легендарное бельгийское кольцо, проложенное по дорогам общего пользования среди густых лесов Арденнских гор. Трасса вошла в историю как одна из самых красивых и опасных арен мирового автоспорта, регулярно меняющая ход гонок непредсказуемой погодой. Сегодня это длинный скоростной трек, знаменитый сложнейшей связкой Eau Rouge — Raidillon, где пилоты на огромной скорости преодолевают крутой подъем вслепую.',
        coordinates: '52°04′16″N 1°00′58″W',
        openedInYear: 1921,
        lapRecordTime: '1:44.701',
        turnsCount: 19,
        grandstandCapacity: 70000,
        galleryUrls: [
            `${baseUrl}/trackPhotogallery/spa/image1.webp`,
            `${baseUrl}/trackPhotogallery/spa/image2.webp`,
            `${baseUrl}/trackPhotogallery/spa/image3.webp`
        ]
    },
    {
        id: 3,
        name: 'MONZA',
        country: 'ITALY',
        distance: 5.793,
        eventsCount: 2,
        imageUrl: `${baseUrl}/circuits/conf_path/Monza.svg`,
        series: ['f1', 'gt'],
        circuitPathUrl: `${baseUrl}/circuits/conf_path/Monza.svg`,
        circuitCornersUrl: `${baseUrl}/circuits/conf_corners/Monza.svg`,
        descriptionPhotoUrl: '',
        description: 'Национальный автодром Монцы — легендарный итальянский «Храм скорости», расположенный на территории старинного королевского парка. Трасса вошла в историю как место проведения большинства Гран-при Италии, пропитанное культом Ferrari и преданностью фанатов-тифози. Сегодня это культовый высокоскоростной трек, знаменитый своими длинными прямыми и коварным поворотом Parabolica, где гонщики проверяют на прочность тормоза и собственную смелость.',
        coordinates: '45°37′14″N 9°17′22″E',
        openedInYear: 1922,
        lapRecordTime: '1:20.901',
        turnsCount: 11,
        grandstandCapacity: 118865,
        galleryUrls: [
            `${baseUrl}/trackPhotogallery/monza/image1.webp`,
            `${baseUrl}/trackPhotogallery/monza/image2.webp`,
            `${baseUrl}/trackPhotogallery/monza/image3.webp`
        ]
    },
    {
        id: 4,
        name: 'INTERLAGOS',
        country: 'BRAZIL',
        distance: 4.309,
        eventsCount: 2,
        imageUrl: `${baseUrl}/circuits/conf_path/Interlagos.svg`,
        series: ['f1', 'wec'],
        circuitPathUrl: `${baseUrl}/circuits/conf_path/Interlagos.svg`,
        circuitCornersUrl: `${baseUrl}/circuits/conf_corners/Interlagos.svg`,
        descriptionPhotoUrl: '',
        description: 'Автодром Жозе Карлуса Паче (Интерлагос) — легендарное сердце бразильского автоспорта, построенное на холмах между двумя озерами окраин Сан-Паулу. Трасса навсегда вошла в историю своими драматичными финалами, где под проливным дождем решались судьбы чемпионских титулов. Сегодня это скоростной трек, закрученный против часовой стрелки и знаменитый культовой связкой Senna S, где пилоты ведут жесткую борьбу на пределе возможностей техники.',
        coordinates: '23°42′4″S 46°41′50″W',
        openedInYear: 1940,
        lapRecordTime: '1:10.540',
        turnsCount: 15,
        grandstandCapacity: 60000,
        galleryUrls: [
            `${baseUrl}/trackPhotogallery/interlagos/image1.jpg`,
            `${baseUrl}/trackPhotogallery/interlagos/image2.avif`
        ]
    },
    {
        id: 5,
        name: 'BARCELONA-CATALUNYA',
        country: 'SPAIN',
        distance: 5.891,
        eventsCount: 2,
        imageUrl: `${baseUrl}/circuits/conf_path/Barcelona-Catalunya.svg`,
        series: ['f1', 'gt'],
        circuitPathUrl: `${baseUrl}/circuits/conf_path/Barcelona-Catalunya.svg`,
        circuitCornersUrl: `${baseUrl}/circuits/conf_corners/Barcelona-Catalunya.svg`,
        descriptionPhotoUrl: '',
        description: 'Трасса Барселона-Каталония — легендарный дом испанского автоспорта, ставший эталонным полигоном для предсезонных тестов Формулы-1. Трасса вошла в историю как универсальный индикатор эффективности гоночных машин, где побеждают только самые сбалансированные болиды. Сегодня это техничный трек, знаменитый своим затяжным поворотом Campsa и длинной прямой, где инженеры проверяют идеальную аэродинамику и износ резины.',
        coordinates: '41°34′12″N 2°15′40″E',
        openedInYear: 1991,
        lapRecordTime: '1:18.149',
        turnsCount: 18,
        grandstandCapacity: 140700,
        galleryUrls: [
            `${baseUrl}/trackPhotogallery/barcelona/image1.webp`,
            `${baseUrl}/trackPhotogallery/barcelona/image2.webp`
        ]
    }
];