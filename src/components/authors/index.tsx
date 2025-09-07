import React, { JSX } from 'react';
import authorsGlobal from 'js-yaml-loader!../../../blog/authors.yml';
import {
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaStackOverflow,
  FaEnvelope,
  FaGlobe,
  FaLink
} from 'react-icons/fa';
import { SiX } from 'react-icons/si';
import { FaDiscord, FaTelegram } from 'react-icons/fa';
import { SiVk, SiModin} from 'react-icons/si';

interface AuthorsProps {
  authors: string[];
  size?: 'small' | 'medium' | 'large';
  showTitle?: boolean;
  showDescription?: boolean;
}

const socialIconMap = {
  github: FaGithub,
  twitter: FaTwitter,
  x: SiX,
  linkedin: FaLinkedin,
  stackoverflow: FaStackOverflow,
  email: FaEnvelope,
  website: FaGlobe,
  vk: SiVk,
  telegram: FaTelegram,
  moddb: SiModin,
  discord: FaDiscord
};

const sizeMap = {
  small: { icon: 16, image: 32 },
  medium: { icon: 20, image: 48 },
  large: { icon: 24, image: 64 }
};

function normalizeSocialLink(platform: string, handleOrUrl: string): string {
  const isAbsoluteUrl = 
    handleOrUrl.startsWith('http://') || 
    handleOrUrl.startsWith('https://');
  
  if (isAbsoluteUrl) {
    return handleOrUrl;
  }

  switch (platform) {
    case 'github':
      return `https://github.com/${handleOrUrl}`;
    case 'twitter':
      return `https://twitter.com/${handleOrUrl}`;
    case 'x':
      return `https://x.com/${handleOrUrl}`;
    case 'linkedin':
      return `https://linkedin.com/in/${handleOrUrl}`;
    case 'stackoverflow':
      return `https://stackoverflow.com/users/${handleOrUrl}`;
    case 'email':
      return `mailto:${handleOrUrl}`;
    case 'vk':
      return `https://vk.com/${handleOrUrl}`;
    case 'telegram':
      return `https://t.me/${handleOrUrl}`;
    case 'moddb':
      return `https://www.moddb.com/members/${handleOrUrl}`;
    case 'discord':
      // Discord использует специальные ссылки-приглашения
      return handleOrUrl.startsWith('https://') ? handleOrUrl : `https://discord.gg/${handleOrUrl}`;
    default:
      return handleOrUrl;
  }
}

export default function Authors({ 
  authors, 
  size = 'medium',
  showTitle = true,
  showDescription = false 
}: AuthorsProps): JSX.Element {
  if (!authors || authors.length === 0) {
    return (
      <div style={{ marginTop: 20, marginBottom: 20 }}>
        No authors found.
      </div>
    );
  }

  const { icon: iconSize, image: imageSize } = sizeMap[size];

  const filteredAuthors = authors
    .map((authorKey) => {
      const authorData = authorsGlobal[authorKey];
      if (!authorData) {
        console.warn(`Author key "${authorKey}" not found in authors.yml`);
        return null;
      }
      return {
        key: authorKey,
        ...authorData,
      };
    })
    .filter(Boolean) as Author[];

  if (filteredAuthors.length === 0) {
    return (
      <div style={{ marginTop: 20, marginBottom: 20 }}>
        No valid authors found.
      </div>
    );
  }

  return (
    <div style={{ marginTop: 20, marginBottom: 20 }}>
      <b>Authors:</b>
      <div className="row">
        {filteredAuthors.map((author, index) => (
          <div
            className="col col--6"
            key={index}
            style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}
          >
            {author.image_url && (
              <img
                src={author.image_url}
                alt={author.name}
                style={{
                  width: imageSize,
                  height: imageSize,
                  borderRadius: '50%',
                  marginRight: '1rem',
                  objectFit: 'cover'
                }}
              />
            )}
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 'bold' }}>
                {author.url ? (
                  <a 
                    href={author.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'none' }}
                  >
                    {author.name}
                  </a>
                ) : (
                  author.name
                )}
              </div>
              
              {showTitle && author.title && (
                <div style={{ fontSize: '0.9em', color: '#666', marginBottom: '0.5rem' }}>
                  {author.title}
                </div>
              )}
              
              {showDescription && author.description && (
                <div style={{ fontSize: '0.8em', color: '#888', marginBottom: '0.5rem' }}>
                  {author.description}
                </div>
              )}

              {author.socials && (
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  {Object.entries(author.socials)
                    .filter(([_, value]) => value && value !== '')
                    .map(([platform, handleOrUrl]) => {
                      const SocialIcon = socialIconMap[platform as keyof typeof socialIconMap] || FaLink;
                      const normalizedUrl = normalizeSocialLink(platform, handleOrUrl as string);
                      
                      return (
                        <a
                          key={platform}
                          href={normalizedUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          title={`${author.name} on ${platform}`}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: iconSize + 8,
                            height: iconSize + 8,
                            borderRadius: '4px',
                            color: 'inherit',
                            transition: 'background-color 0.2s ease'
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = 'var(--ifm-color-emphasis-200)';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = 'transparent';
                          }}
                        >
                          <SocialIcon size={iconSize} />
                        </a>
                      );
                    })}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}