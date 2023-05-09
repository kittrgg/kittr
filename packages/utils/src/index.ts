interface Json {
  [key: string]: string | number | boolean | null | Json | Json[]
}

interface GetParams {
  url: string;
  headers?: HeadersInit;
  signal?: AbortSignal;
  redirect?: 'follow';
}

const get = async <T>({
  url,
  headers = {},
  signal = undefined,
  redirect,
}: GetParams): Promise<T> => {
  const requestOptions = {
    method: 'GET',
    headers,
    signal,
    redirect,
  };

  return fetch(url, requestOptions).then(handleResponse) as Promise<T>;
};

interface PostParams {
  url: string;
  body?: Json;
  headers?: HeadersInit;
  redirect?: 'follow';
}

const post = async <T>({ url, body, headers = {} }: PostParams): Promise<T> => {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...headers },
    body: JSON.stringify(body),
  };

  return fetch(url, requestOptions).then(handleResponse) as Promise<T>;
};

interface PutParams {
  url: string;
  body: Json;
  headers?: HeadersInit;
}

const put = async <T>({ url, body, headers = {} }: PutParams): Promise<T> => {
  const requestOptions = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json', ...headers },
    body: JSON.stringify(body),
  };

  return await fetch(url, requestOptions).then(handleResponse) as Promise<T>;
};

interface DeleteParams {
  url: string;
  body?: Json;
  headers?: HeadersInit;
}

// Prefixed with underscored because delete is a reserved word in javascript
const _delete = async <T>({
  url,
  body,
  headers = {},
}: DeleteParams): Promise<T> => {
  const requestOptions = {
    method: 'DELETE',
    headers,
    body: JSON.stringify(body),
  };
  return fetch(url, requestOptions).then(handleResponse) as Promise<T>;
};

// Helper functions

const handleResponse = (response: Response) => {
  // Uses .text() so that there is no error for an empty response
  return response.text().then((text) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const data = text && JSON.parse(text);

    if (!response.ok) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const error = data || response.statusText;
      // eslint-disable-next-line prefer-promise-reject-errors, @typescript-eslint/no-unsafe-assignment
      return Promise.reject({ requestedUrl: response.url, error });
    }

    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return data;
  });
};

export const fetcher = {
  get,
  post,
  put,
  delete: _delete,
};

export const toURL = (str: string): string => {
  return str.replace(/\s+/g, '-').replace(/[^\w-]/g, '_');
};

/** Not up in here! Filter bad words (or at least try to). Pass in a string and see if it passes. */
export const badWordFilter = (string: string): boolean => {
  const badWords = [
    'penis',
    'vagina',
    'nazi',
    'nigger',
    'faggot',
    'fag',
    'nigga',
    'fuck',
    'slut',
    'whore',
    'cunt',
    'cock',
    'bullshit',
    'bull shit',
    'bitch',
    'twat',
    'mierda',
    'pussy',
    'nipple',
    'butthole',
    'asshole',
    'areola',
    'arsehole',
    'ballsack',
    'ball sack',
    'blowjob',
    'blow job',
    'bondage',
    'bunghole',
    'bung hole',
    'cameltoe',
    'camel toe',
    'chink',
    'choad',
    'chode',
    'cocaine',
    'marijuana',
    'coitus',
    'sex',
    'condom',
    'crotch',
    'cum',
    'cumm',
    'dildo',
    'ejaculate',
    'genital',
    'goddamn',
    'goddam',
    'handjob',
    'hitler',
    'hymen',
    'scrotum',
    'taint',
    'intercourse',
    'jackoff',
    'jack off',
    'jigga',
    'jiggaboo',
    'jigger',
    'jizz',
    'kkk',
    'lesbian',
    'lesbo',
    'masterbate',
    'master bate',
    'masturbate',
    'mastur bate',
    'milf',
    'molest',
    'nigg',
    'orgy',
    'orgies',
    'orgasm',
    'pen15',
    'peni5',
    'pervert',
    'phuk',
    'porn',
    'prostitute',
    'queef',
    'queer',
    'raghead',
    'racist',
    'rapist',
    'rectum',
    'retard',
    'rimjob',
    'semen',
    'shitdick',
    'shiteater',
    'shitface',
    'shitfit',
    'shitforbrains',
    'shithead',
    'shitstain',
    'sixsixsix',
    'sixtynine',
    'sixty nine',
    'six six six',
    'sixsix six',
    'six sixsix',
    'slanteye',
    'swastika',
    'tampon',
    'testicle',
    'titjob',
    'tittie',
    'titty',
    'towelhead',
    'towel head',
    'urinary',
    'urinate',
    'urine',
    'vibrator',
    'vibrater',
    'vulva',
    'wetback',
    'gspot',
    'g spot',
    'wigger',
    'whigger',
    'wet back',
    'wtf',
    'xtc',
    'xxx',
    'x x x',
    'w t f',
    'x t c',
    'zipperhead',
    'zipper head',
    'peepee',
    'pee pee',
  ];

  return badWords.some((check) => string.includes(check));
};