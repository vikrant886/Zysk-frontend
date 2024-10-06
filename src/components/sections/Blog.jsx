import { ArrowUpRight } from "lucide-react"
import BlogData from "../../assets/BlogData"

export default function BlogCard({
    img,
    profileImg,
    heading,
    text,
    author,
    date,
    category
}) {
    return (
        <div className="max-w-sm overflow-hidden bg-white">
            <div className="relative h-48">
                <img
                    src={img}
                    alt={heading}
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="px-6 py-4">
                <div className="text-sm font-medium text-purple-600 mb-2">{category}</div>
                <h3 className="text-xl font-semibold mb-2 flex items-center justify-between">
                    {heading}
                    <ArrowUpRight className="ml-2 h-4 w-4" />
                </h3>
                <p className="text-[#475467] text-sm mb-4">{text}</p>
                <div className="flex items-center">
                    <img
                        src={profileImg}
                        alt={author}
                        className="rounded-full mr-3 w-8 h-8"
                    />
                    <div>
                        <p className="text-sm font-medium">{author}</p>
                        <p className="text-xs text-gray-500">{date}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

// Example usage
const blogPostData = {
    img: 'https://s3-alpha-sig.figma.com/img/92f9/d44d/896aad9fd5981c841633a846ddb6994b?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QKUyo7n7wkv~yjfh1-DF4-jlrmxtPCaXfgo5YDpvC9vDSLCW0Vs7yCm9i8ocGUpwv-W9yXIp6hxU1Xw8ccYydKuoIw6hTv9nE1Cy2dUcbIzP-qAExdGJnx071tIvG6fm-TTSEaCzeOUzc2EHzw8p0lMXmcK6mcNbGiif1fBL4eOcTrsqtqR8Yxz-dL-TQLl9CKQhOOWF3ZgzJnrsWZjpACaBi11a2tIF-yyBPoFYVrrBHr90GywrnQ-O7TTx1dufzTpHtTGwUO7tQglz362WAuwF6QnCi5jNF1ojiJv063H42Hy0bf4yFGM3PUbVyzhm2ufy5k9RAvQyfLPV83U0BQ__',
    profileImg: 'https://s3-alpha-sig.figma.com/img/27a8/497d/5cb712a39a846f3d49443b8283852dca?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DO8hQyQJ~WcDdwZBYLIbjPxdpXjVFU~3vzzIRX6jbhX~1pkCaDvCc5MttCl7GsphlPYePL7BSbxwUXpAVCWpE4hdJFbbeA~nwlEwPsp44yKNGhft80Ez7DTiNTIHP8-~qljJXLEKKGMXUsyqrB9usQGRYHmbQJqtDfEfEznxVopU5YnZ4emZ3S6e0XjvbcDMIq4YQtXpNcdgf2Z~IsiRbrjhASedghgjp0o1qncKfoA70wrKigiSpXBQV9P6Qpfpwax8HOniHhTQiu~j33jinltOTVz~e2WXmG7DIAdOzcFf0ye-cc3yqD9eBSh9ZCdcFRTAjVGUZtNbFVjPXvpp~Q__',
    heading: 'UX review presentations',
    text: 'How do you create compelling presentations that wow your colleagues and impress your managers?',
    author: 'Olivia Rhye',
    date: '20 Jan 2024',
    category: 'Design'
}

export function Blog() {
    return (
        <div className="md:p-default-lr px-[16px] flex flex-col gap-[64px]">
            <div className="flex md:flex-row flex-col justify-between items-center mb-8">
                <div>
                    <h2 className="text-sm font-semibold text-[#6941C6] mb-1">Our blog</h2>
                    <h1 className="text-3xl text-[#101828] font-bold">Lastest blog posts</h1>
                    <p className="text-[#475467] mt-2">Tool and strategies modern teams need to help their companies grow.</p>
                </div>
                <button className="bg-[#7F56D9] py-[12px] px-[20px] rounded-[12px] text-white">
                    View all posts
                </button>
            </div>
            <div className="grid align-middle gap-[32px] md:grid-cols-3 grid-cols-1">
                {
                    BlogData.map((data, index) => (
                        <BlogCard key={index} {...data} />
                    ))
                }
            </div>
        </div>
    )
}
