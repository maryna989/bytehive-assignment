const createSocialList = socialMedia => {
  return `
  <ul class="social-icons-list">
    ${socialMedia
      .map(
        social => `
      <li class="social-item">
        <a href="${social.link}" aria-label="${social.platform}">
          <svg class="icon js-icon-${social.platform.toLowerCase()}" width="26" height="26">
            <use href="../img/icons.svg${social.icon}"></use>
          </svg>
        </a>
      </li>
    `
      )
      .join('')}
  </ul>
`;
};

export { createSocialList };
