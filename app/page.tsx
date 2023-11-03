/**
 * Homepage of the website.
 */

import CardParagraph from '../components/cards/cardParagraph';
import CardTitle from '../components/cards/cardTitle';
import ImageCard from '../components/cards/imageCard';
import TextCard from '../components/cards/textCard';
import PageTitle from '../components/pageTitle/pageTitle';
import PhotoClassePolos from '../public/images/misc/photo_classe_polos.jpg';

export default function Home() {
  return (
    <>
      <PageTitle>Bienvenue en Ellipse !</PageTitle>
      <ImageCard
        src={PhotoClassePolos}
        alt="Photo de toute l'Ellipse en polo de classe avec M. Rax"
        caption='Nous (les plus beaux)'
      >
        <CardTitle>La prépa Ellipse</CardTitle>
        <CardParagraph>
          Bienvenue sur le site de l&apos;Ellipse, la classe de MPSI3 de Ginette
          ! Pourquoi choisir Ginette, et oser la prépa ? En Ellipse, la prépa ce
          n&apos;est pas que deux ans de travail, mais surtout une belle
          expérience de vie! C&apos;est l&apos;occasion de se dépasser, de
          découvrir les maths, les vraies, mais aussi le sport, la musique, les
          activités sociales … On vit deux années enrichissantes et fondatrices,
          pleines de bons souvenirs !
        </CardParagraph>
      </ImageCard>
      <TextCard>
        <CardTitle>Pourquoi un site ?</CardTitle>
        <CardParagraph>
          Nous vous présentons Ginette, avec son formidable esprit co, la vie en
          prépa et en particulier la filière MPSI, et bien sûr notre classe,
          l&apos;Ellipse. En espérant vous donner envie de nous rejoindre
          l&apos;année prochaine en prépa, peut-être même à la BJ, et qui sait,
          en Ellipse ?
        </CardParagraph>
        <CardParagraph>
          Des questions ? Admis en MPSI à Ginette ? Contacte-nous ! (voir juste
          en dessous)
        </CardParagraph>
      </TextCard>
    </>
  );
}
