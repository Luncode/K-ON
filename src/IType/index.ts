export interface IBanner {
    src: string
    isVedio: boolean
    bannerClick?:()=>void
}

export interface IMeunItem {
    text: string
    click?: () => void
}

export interface IUserCard {
    face: string
    username: string
    mid:number
}

export interface IOneTalk {
    commit_from?: string
    created_at?: string
    creator?: string
    creator_uid?: number
    from?: string
    from_who?: null
    hitokoto?: string
    id?: number
    length?: number
    reviewer?: number
    type?: string
    uuid?: string
}

interface IImgList {
    src: string
    href?: string
}

export interface ISiderList {
    imgList: IImgList[]
}

export interface IIconHrefList {
    List: IIconHref[]
}

export interface IIconHref {
    iconSrc: string,
    text: string
    herf: string
}

export interface ILoginPanel{
    doLogin:(mid:string) => void
    closePanle:() => void
}

export interface IBilibiliInfo{
    mid:number
    name:string
    sex:string
    face:string
    level:number,
    sign:string,
    top_photo:string
}

export interface IBilibiliBase{
    code: number
    data: IBilibiliInfo
    message: string
}

export interface IKcard{
    title:string
    img:string
    context:string
}