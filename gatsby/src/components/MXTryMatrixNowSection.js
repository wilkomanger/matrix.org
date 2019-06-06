import React from 'react'

const MXTryMatrixNowSection = ({items}) => {
    return (
        <div class="mxblock">
        <div class="mxgrid mxgrid--discover">
        {items.map(function(project) {
            return (
        <div class="mxgrid__item20 filterableProject"
            data-featured={project.frontmatter.featured}
            data-maturity={project.frontmatter.maturity}
            data-language={project.frontmatter.language}
            data-license={project.frontmatter.license}>
            <div class="mxgrid__item__bg mxgrid__item__bg--clear">
                
                <h4 class="mxgrid__item__bg__hx">{project.frontmatter.title}</h4>
                <p class="mxgrid__item__bg__p">{project.frontmatter.description}</p>
                <div class="mxgrid__item__bg__vert">
                    <img src={project.frontmatter.thumbnail} alt="" class="mxgrid__item__bg__img" />
                </div>
            </div>
        </div>)
        })}
        </div>
    </div>
)}
export default MXTryMatrixNowSection