import React from 'react';

const Section = ({ children }) => (
    <span class="ql-formats">
        {children}
    </span>
);

const Toolbar = () => (
    <div id="toolbar">
        <Section>
            <select className="ql-header" defaultValue={""} onChange={e => e.persist()}>
                <option value="1" />
                <option value="2" />
                <option value="3" />
                <option value="4" />
                <option value="5" />
                <option value="6" />
                <option selected />
            </select>

            <select className="ql-font">
                <option value="sans-serif" />
                <option value="serif" />
                <option value="monospace" />
            </select>

            <select class="ql-size">
                <option value="small" />
                <option selected />
                <option value="large" />
                <option value="huge" />
            </select>
        </Section>

        <Section>
            <button className="ql-bold" />
            <button className="ql-italic" />
            <button className="ql-underline" />
            <button className="ql-strike" />
            <button className="ql-blockquote" />
            <select className="ql-divider ql-header">
                <option value="fancy">Fancy</option>
                <option selected />
            </select>
        </Section>

        <Section>
            <button class="ql-list" value="ordered" />
            <button class="ql-list" value="bullet" />
            <button class="ql-indent" value="-1" />
            <button class="ql-indent" value="+1" />
            <button class="ql-script" value="sub" />
            <button class="ql-script" value="super" />
        </Section>

        <Section>
            <button class="ql-link" />
            <button class="ql-clean" />
        </Section>
    </div>
  );

export default Toolbar;