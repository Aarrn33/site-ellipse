import CardParagraph from '../components/cards/cardParagraph';
import CardTitle from '../components/cards/cardTitle';
import TextCard from '../components/cards/textCard';
import PageTitle from '../components/pageTitle/pageTitle';

export default function Home() {
  return (
    <>
      <PageTitle>Bienvenue en Ellipse !</PageTitle>
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
          Des questions ? Admis en MPSI à Ginette ? Contacte nous !
        </CardParagraph>
      </TextCard>
    </>
  );
}
