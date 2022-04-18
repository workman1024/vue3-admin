interface EnvOption {
  url: string,
  title: string,
  system: string
}

interface Env {
  [key: string]: EnvOption
}

const myEnv: Env = {
  'www.dev.com': {
    url: 'http://192.168.0.46:4000/',
    system: 'dev',
    title: '开发环境',
  }
}

function getEnv(): EnvOption {
  const curWwwPath = window.document.location.href;
  const pathName = window.document.location.pathname;
  const pos = curWwwPath.indexOf(pathName);
  const localhostPath = curWwwPath.substring(0, pos);
  const localArr = localhostPath.split('//');
  const host = localArr[1]
  if (Object.keys(myEnv).includes(host)) {
    return myEnv[host];
  } else {
    return {
      url: `//${host}/api/prelogin`,
      system: 'local',
      title: '本地环境',
    }
  }
}

export const getBaseUrl = () => {
  if (import.meta.env.NODE_ENV === 'custom') {
    return getEnv();
  }
  return {
    url: import.meta.env.VITE_BASE_API as string
  }
}