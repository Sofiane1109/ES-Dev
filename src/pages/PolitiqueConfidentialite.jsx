import LegalLayout, { LegalSection } from '../components/LegalLayout'

function PolitiqueConfidentialite() {
  return (
    <LegalLayout title="Politique de confidentialité" updated="25 août 2026">
      <LegalSection title="Responsable du traitement">
        <p>
          Sofiane En-Nali, exerçant sous le nom commercial « ES Dev », est
          responsable du traitement des données personnelles décrites
          ci-dessous. Pour toute question, contactez{' '}
          <a href="mailto:contact@esdev.be" className="cursor-pointer text-brand-600 underline">
            contact@esdev.be
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection title="Données collectées">
        <p>
          Ce site ne collecte des données personnelles que lorsque vous
          remplissez volontairement le formulaire de contact : nom, adresse
          email et contenu de votre message. Aucune autre donnée n'est
          collectée automatiquement — il n'y a ni compte utilisateur, ni
          paiement en ligne sur ce site.
        </p>
      </LegalSection>

      <LegalSection title="Finalité et base légale">
        <p>
          Ces données sont utilisées uniquement pour répondre à votre demande
          de devis ou de contact. Le traitement repose sur les démarches
          précontractuelles effectuées à votre demande (article 6.1.b du
          RGPD) et sur l'intérêt légitime d'ES Dev à répondre aux messages
          reçus.
        </p>
      </LegalSection>

      <LegalSection title="Destinataires des données">
        <p>
          Vos données sont uniquement consultées par ES Dev. Le formulaire de
          contact est acheminé via Netlify Forms, qui agit en tant que
          sous-traitant technique pour la transmission des messages, sans
          utilisation à d'autres fins.
        </p>
      </LegalSection>

      <LegalSection title="Durée de conservation">
        <p>
          Les données transmises via le formulaire sont conservées le temps
          nécessaire au traitement de votre demande, puis supprimées dans un
          délai raisonnable si aucune suite n'y est donnée.
        </p>
      </LegalSection>

      <LegalSection title="Cookies et traceurs">
        <p>
          Ce site n'utilise aucun cookie de mesure d'audience ni de
          publicité. Netlify, l'hébergeur, peut déposer des cookies
          strictement techniques nécessaires au fonctionnement et à la
          protection anti-spam du formulaire de contact.
        </p>
      </LegalSection>

      <LegalSection title="Vos droits">
        <p>
          Conformément au RGPD, vous disposez d'un droit d'accès, de
          rectification, d'effacement, de limitation et d'opposition
          concernant vos données personnelles. Pour exercer ces droits,
          contactez{' '}
          <a href="mailto:contact@esdev.be" className="cursor-pointer text-brand-600 underline">
            contact@esdev.be
          </a>
          . Vous pouvez également introduire une réclamation auprès de
          l'Autorité de protection des données belge (APD —{' '}
          <a
            href="https://www.autoriteprotectiondonnees.be"
            target="_blank"
            rel="noreferrer"
            className="cursor-pointer text-brand-600 underline"
          >
            autoriteprotectiondonnees.be
          </a>
          ).
        </p>
      </LegalSection>

      <LegalSection title="Modifications">
        <p>
          Cette politique peut être mise à jour pour refléter l'évolution du
          site ou de la réglementation. La date de dernière mise à jour est
          indiquée en haut de cette page.
        </p>
      </LegalSection>
    </LegalLayout>
  )
}

export default PolitiqueConfidentialite
