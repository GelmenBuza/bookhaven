
const mainSlide = document.getElementById('slideImg')
const slideButtons = [document.getElementById('slideButtonLeft'), document.getElementById('slideButtonRight')]
const slides = document.querySelector('.anotherSlide')
let activeSlide = document.querySelector('.aciveSlide')


function makeSlides() {
    for (const ell of slides.children) {
        ell.addEventListener('click', () => {
            mainSlide.classList.add('faded')

            setTimeout(() => {

                mainSlide.classList.remove('faded')
                mainSlide.attributes.src.textContent = ell.firstChild.attributes.src.textContent;

            }, 250)
            ell.classList.add('aciveSlide');
            activeSlide.classList.remove('aciveSlide');
            activeSlide = ell;
        })
    }
}

function generateStars(count) {
    const result = [];
    for (let i = 0; i < count; i += 1) {
        result.push(`
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path fill="#000"
                                d="m7.325 18.923l1.24-5.313l-4.123-3.572l5.431-.47L12 4.557l2.127 5.01l5.43.47l-4.123 3.572l1.241 5.313L12 16.102z"
                                stroke-width="1" stroke="#000" />
                        </svg>`)
    }
    if (result.length < 5) {
        for (let i = count; i < 5; i += 1) {
            result.push(`
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path fill="transparent"
                                d="m7.325 18.923l1.24-5.313l-4.123-3.572l5.431-.47L12 4.557l2.127 5.01l5.43.47l-4.123 3.572l1.241 5.313L12 16.102z"
                                stroke-width="1" stroke="#000" />
                        </svg>
                        `)
        }
    }
    return result.join('\n')
}

function generateReview(resviewsText, i, side) {
    const resviewsDiv = document.querySelector('.reviews_cont');
    resviewsDiv.innerHTML = `
                <div class="review ${side}">
                <div class="review_left_side">
                    <p>${resviewsText.at(i).authorName}</p>
                    <img src="./assets/images/avatars/автор отзыва ${Math.abs(i) + 1}.jpg" alt="">
                </div>
                <div class="review_right_side">
                    <div class="stars">
                        ${generateStars(resviewsText.at(i).raiting)}
                    </div>
                    <p>
                        ${resviewsText.at(i).text}
                    </p>
                    <span>${resviewsText.at(i).date}</span>
                </div>
            </div>
    `
}

function makeReviews() {
    const resviewsText = [
        {
            authorName: 'Мария Чирнявская',
            raiting: 4,
            text: 'Очень увлекательная история "Невеста сумеречной Тени" с элементами магии и дворцовых интриг. Главная героиня сильная и харизматичная, а сюжет держит в напряжении до последней страницы. Любителям фантастики и 		романтики — обязательно к прочтению!',
            date: '15.10.2024'
        },
        {
            authorName: 'Иванов Дмитрий Олегович',
            raiting: 4,
            text: 'Интересный взгляд на 90-е через призму жизни главного героя расскааза "Игра на чужом поле". Книга насыщена событиями, политическими интригами и неожиданными поворотами. Читается на одном дыхании, особенно для тех, 		кто помнит ту эпоху',
            date: '20.10.2023'
        },
        {
            authorName: 'Кононова Василиса',
            raiting: 5,
            text: 'Очень полезная книга для тех, кто хочет разобраться в возможностях ChatGPT. Много практических советов и идей для бизнеса. Отличный справочник для начинающих и продвинутых пользователей.',
            date: '10.10.2023'
        },
        {
            authorName: 'Рябцева Маргарита Тихоновна',
            raiting: 4,
            text: 'Книга, которая должна быть в каждой семье с детьми. Простым языком объясняются сложные медицинские вопросы. После прочтения стало меньше тревог, а понимание детских болезней — больше. Рекомендую "Занудная педиатрия 	для мам, пап, бабушек и дедушек" к прочтению!',
            date: '01.01.2025'
        },
        {
            authorName: 'Абросман Борис Гадзилович',
            raiting: 2,
            text: 'Книга "Готовим по-русски. Рецепты, традиции, наследие" разочаровала. Несмотря на заявленное разнообразие рецептов, многие из них оказались либо слишком сложными для повседневного приготовления, либо банальными. 	Исторические справки интересны, но их слишком много, и они отвлекают от основной темы — кулинарии. Ожидал больше практической пользы, а не просто пересказа истории русской кухни. Вдохновения для экспериментов, увы, не 		почерпнул.',
            date: '18.10.2024'
        },
        {
            authorName: '18.10.2024',
            raiting: 3,
            text: 'Отзыв на произведение "Речь и этикет". Классика, которая не теряет актуальности. Книга помогает понять, как важно правильно использовать слова в общении. Очень полезно для школьников и взрослых, кто хочет улучшить 		свои коммуникативные навыки.',
            date: '25.02.2025'
        },
        {
            authorName: 'Тихоненков Амиран',
            raiting: 5,
            text: 'Незаменимая книга для водителей. В книге "Я всегда прав на дороге. Юридическая грамотность автомобилистов" простым языком объяснены сложные юридические аспекты. Теперь чувствую себя увереннее на дороге и знаю, как 		защитить свои права.',
            date: '22.01.2025'
        },
        {
            authorName: 'Somik_AppleG',
            raiting: 3,
            text: 'Отличный справочник для водителей "Антиштраф 2018". Компактно и по делу. Теперь всегда держу эту книгу в бардачке — она иногда выручала в спорных ситуациях с инспекторами.',
            date: '02.02.2020'
        },
        {
            authorName: 'Ахматова А.',
            raiting: 4,
            text: '"Олимпийские искры" интересная книга о спорте и его роли в жизни молодежи. Много вдохновляющих историй и полезной информации для тех, кто интересуется спортивными соревнованиями и их организацией.',
            date: '15.05.2003'
        },
        {
            authorName: 'Котик96_Смайл',
            raiting: 5,
            text: 'Добрая и увлекательная сказка для детей и взрослых. При прочтении "Ромка, Фомка и Артос" придалась ностальгии. Герои книги учат дружбе, смелости и искренности. Читали с ребенком — остались в восторге!',
            date: '31.12.2023'
        },
    ]
    let number = 0;
    generateReview(resviewsText, number, '');
    document.getElementById('review_left').addEventListener('click', () => {
        number -= 1;
        if (Math.abs(number) >= resviewsText.length) {
            number = 0
        }
        document.querySelector('.review').classList.add('movedRight')

        setTimeout(() => {
            document.querySelector('.review').classList.remove('movedRight')
            generateReview(resviewsText, number, 'leftSide');
        }, 200);

        document.querySelector('.review').classList.add('normalize')

        setTimeout(() => {
            document.querySelector('.review').classList.remove('leftSide')
            document.querySelector('.review').classList.remove('normalize')
        }, 400)
    })

    document.getElementById('review_right').addEventListener('click', () => {
        number += 1;
        if (Math.abs(number) >= resviewsText.length) {
            number = 0
        }
        document.querySelector('.review').classList.add('movedLeft')

        setTimeout(() => {
            document.querySelector('.review').classList.remove('movedLeft')
            generateReview(resviewsText, number, 'rightSide');
        }, 200);

        document.querySelector('.review').classList.add('normalize')

        setTimeout(() => {
            document.querySelector('.review').classList.remove('rightSide')
            document.querySelector('.review').classList.remove('normalize')

        }, 400)

    })

}


export default function () {
    makeSlides()
    makeReviews()
}