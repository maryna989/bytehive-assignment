export const createSocialList = socialMedia => {
  return `
    ${socialMedia
      .map(
        social => `
      <li class="social-item">
        <a href="${social.link}" class="social-link" aria-label="${social.platform}">
          <svg class="social-icon" width="26" height="26">
            <use href="./img/icons.svg${social.icon}"></use>
          </svg>
        </a>
      </li>
    `
      )
      .join('')}
`;
};
