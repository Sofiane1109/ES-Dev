import LegalLayout, { LegalSection } from '../components/LegalLayout'

function MentionsLegales() {
  return (
    <LegalLayout title="Mentions légales" updated="25 août 2026">
      <LegalSection title="Éditeur du site">
        <p>
          Ce site est édité par Sofiane En-Nali, exerçant sous le nom commercial
          « ES Dev ». L'activité est en cours d'immatriculation : le numéro
          d'entreprise (BCE) sera communiqué ici dès son attribution.
        </p>
        <ul className="list-disc space-y-1.5 pl-5">
          <li>Lieu d'exercice : Bruxelles, Belgique</li>
          <li>
            Email :{' '}
            <a href="mailto:contact@esdev.be" className="cursor-pointer text-brand-600 underline">
              contact@esdev.be
            </a>
          </li>
          <li>Directeur de la publication : Sofiane En-Nali</li>
        </ul>
      </LegalSection>

      <LegalSection title="Hébergement">
        <p>Ce site est hébergé par :</p>
        <ul className="list-disc space-y-1.5 pl-5">
          <li>Netlify, Inc.</li>
          <li>44 Montgomery Street, Suite 300, San Francisco, California 94104, États-Unis</li>
          <li>
            <a
              href="https://www.netlify.com"
              target="_blank"
              rel="noreferrer"
              className="cursor-pointer text-brand-600 underline"
            >
              www.netlify.com
            </a>
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="Propriété intellectuelle">
        <p>
          L'ensemble des contenus présents sur ce site (textes, visuels, logo,
          mise en page) est protégé et reste la propriété de Sofiane En-Nali /
          ES Dev, sauf mention contraire. Toute reproduction ou représentation,
          totale ou partielle, sans autorisation préalable est interdite.
        </p>
      </LegalSection>

      <LegalSection title="Limitation de responsabilité">
        <p>
          Les informations diffusées sur ce site le sont à titre indicatif.
          Bien qu'un soin particulier soit apporté à leur exactitude, ES Dev ne
          peut être tenu responsable des erreurs, omissions, ou de
          l'indisponibilité temporaire du site, quelle qu'en soit la cause.
        </p>
      </LegalSection>

      <LegalSection title="Liens externes">
        <p>
          Ce site peut contenir des liens vers des sites tiers (réseaux
          sociaux, partenaires). ES Dev n'exerce aucun contrôle sur ces sites
          et décline toute responsabilité quant à leur contenu.
        </p>
      </LegalSection>

      <LegalSection title="Droit applicable">
        <p>
          Les présentes mentions légales sont soumises au droit belge. En cas
          de litige et à défaut de résolution amiable, les tribunaux de
          Bruxelles seront seuls compétents.
        </p>
      </LegalSection>
    </LegalLayout>
  )
}

export default MentionsLegales
