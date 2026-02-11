export interface AboutUsPageContentDataType {
  ourMission: OurMissionSection
  ourValues: OurValuesSection
  startDesigning: StartDesigningSection
}

export interface OurMissionSection {
  badge: string
  heading: {
    primary: string
    highlight: string
  }
  description: string
  stats: MissionStat[]
}

export interface MissionStat {
  value: string
  label: string
}

export interface OurValuesSection {
  title: string
  subtitle: string
  values: ValueItem[]
}

export interface ValueItem {
  icon: string // StaticImageData from Next.js
  title: string
  description: string
}

export interface StartDesigningSection {
  title: string
  description: string
  btnText: string
  btnLink: string
}
